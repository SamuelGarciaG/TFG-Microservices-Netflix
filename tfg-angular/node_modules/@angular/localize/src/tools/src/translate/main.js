#!/usr/bin/env node
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/main", ["require", "exports", "@angular/compiler-cli/src/ngtsc/file_system", "glob", "yargs", "@angular/localize/src/tools/src/diagnostics", "@angular/localize/src/tools/src/translate/asset_files/asset_translation_handler", "@angular/localize/src/tools/src/translate/output_path", "@angular/localize/src/tools/src/translate/source_files/source_file_translation_handler", "@angular/localize/src/tools/src/translate/translation_files/translation_loader", "@angular/localize/src/tools/src/translate/translation_files/translation_parsers/simple_json_translation_parser", "@angular/localize/src/tools/src/translate/translation_files/translation_parsers/xliff1_translation_parser", "@angular/localize/src/tools/src/translate/translation_files/translation_parsers/xliff2_translation_parser", "@angular/localize/src/tools/src/translate/translation_files/translation_parsers/xtb_translation_parser", "@angular/localize/src/tools/src/translate/translator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.translateFiles = void 0;
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var glob = require("glob");
    var yargs = require("yargs");
    var diagnostics_1 = require("@angular/localize/src/tools/src/diagnostics");
    var asset_translation_handler_1 = require("@angular/localize/src/tools/src/translate/asset_files/asset_translation_handler");
    var output_path_1 = require("@angular/localize/src/tools/src/translate/output_path");
    var source_file_translation_handler_1 = require("@angular/localize/src/tools/src/translate/source_files/source_file_translation_handler");
    var translation_loader_1 = require("@angular/localize/src/tools/src/translate/translation_files/translation_loader");
    var simple_json_translation_parser_1 = require("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/simple_json_translation_parser");
    var xliff1_translation_parser_1 = require("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/xliff1_translation_parser");
    var xliff2_translation_parser_1 = require("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/xliff2_translation_parser");
    var xtb_translation_parser_1 = require("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/xtb_translation_parser");
    var translator_1 = require("@angular/localize/src/tools/src/translate/translator");
    if (require.main === module) {
        var args = process.argv.slice(2);
        var options = yargs
            .option('r', {
            alias: 'root',
            required: true,
            describe: 'The root path of the files to translate, either absolute or relative to the current working directory. E.g. `dist/en`.',
            type: 'string',
        })
            .option('s', {
            alias: 'source',
            required: true,
            describe: 'A glob pattern indicating what files to translate, relative to the `root` path. E.g. `bundles/**/*`.',
            type: 'string',
        })
            .option('l', {
            alias: 'source-locale',
            describe: 'The source locale of the application. If this is provided then a copy of the application will be created with no translation but just the `$localize` calls stripped out.',
            type: 'string',
        })
            .option('t', {
            alias: 'translations',
            required: true,
            array: true,
            describe: 'A list of paths to the translation files to load, either absolute or relative to the current working directory.\n' +
                'E.g. `-t src/locale/messages.en.xlf src/locale/messages.fr.xlf src/locale/messages.de.xlf`.\n' +
                'If you want to merge multiple translation files for each locale, then provide the list of files in an array.\n' +
                'Note that the arrays must be in double quotes if you include any whitespace within the array.\n' +
                'E.g. `-t "[src/locale/messages.en.xlf, src/locale/messages-2.en.xlf]" [src/locale/messages.fr.xlf,src/locale/messages-2.fr.xlf]`',
            type: 'string',
        })
            .option('target-locales', {
            array: true,
            describe: 'A list of target locales for the translation files, which will override any target locale parsed from the translation file.\n' +
                'E.g. "-t en fr de".',
            type: 'string',
        })
            .option('o', {
            alias: 'outputPath',
            required: true,
            describe: 'A output path pattern to where the translated files will be written.\n' +
                'The path must be either absolute or relative to the current working directory.\n' +
                'The marker `{{LOCALE}}` will be replaced with the target locale. E.g. `dist/{{LOCALE}}`.',
            type: 'string',
        })
            .option('m', {
            alias: 'missingTranslation',
            describe: 'How to handle missing translations.',
            choices: ['error', 'warning', 'ignore'],
            default: 'warning',
            type: 'string',
        })
            .option('d', {
            alias: 'duplicateTranslation',
            describe: 'How to handle duplicate translations.',
            choices: ['error', 'warning', 'ignore'],
            default: 'warning',
            type: 'string',
        })
            .strict()
            .help()
            .parse(args);
        var fs = new file_system_1.NodeJSFileSystem();
        file_system_1.setFileSystem(fs);
        var sourceRootPath = options['r'];
        var sourceFilePaths = glob.sync(options['s'], { cwd: sourceRootPath, nodir: true });
        var translationFilePaths = convertArraysFromArgs(options['t']);
        var outputPathFn = output_path_1.getOutputPathFn(fs.resolve(options['o']));
        var diagnostics = new diagnostics_1.Diagnostics();
        var missingTranslation = options['m'];
        var duplicateTranslation = options['d'];
        var sourceLocale = options['l'];
        var translationFileLocales = options['target-locales'] || [];
        translateFiles({
            sourceRootPath: sourceRootPath,
            sourceFilePaths: sourceFilePaths,
            translationFilePaths: translationFilePaths,
            translationFileLocales: translationFileLocales,
            outputPathFn: outputPathFn,
            diagnostics: diagnostics,
            missingTranslation: missingTranslation,
            duplicateTranslation: duplicateTranslation,
            sourceLocale: sourceLocale
        });
        diagnostics.messages.forEach(function (m) { return console.warn(m.type + ": " + m.message); });
        process.exit(diagnostics.hasErrors ? 1 : 0);
    }
    function translateFiles(_a) {
        var sourceRootPath = _a.sourceRootPath, sourceFilePaths = _a.sourceFilePaths, translationFilePaths = _a.translationFilePaths, translationFileLocales = _a.translationFileLocales, outputPathFn = _a.outputPathFn, diagnostics = _a.diagnostics, missingTranslation = _a.missingTranslation, duplicateTranslation = _a.duplicateTranslation, sourceLocale = _a.sourceLocale;
        var fs = file_system_1.getFileSystem();
        var translationLoader = new translation_loader_1.TranslationLoader(fs, [
            new xliff2_translation_parser_1.Xliff2TranslationParser(),
            new xliff1_translation_parser_1.Xliff1TranslationParser(),
            new xtb_translation_parser_1.XtbTranslationParser(),
            new simple_json_translation_parser_1.SimpleJsonTranslationParser(),
        ], duplicateTranslation, diagnostics);
        var resourceProcessor = new translator_1.Translator(fs, [
            new source_file_translation_handler_1.SourceFileTranslationHandler(fs, { missingTranslation: missingTranslation }),
            new asset_translation_handler_1.AssetTranslationHandler(fs),
        ], diagnostics);
        // Convert all the `translationFilePaths` elements to arrays.
        var translationFilePathsArrays = translationFilePaths.map(function (filePaths) {
            return Array.isArray(filePaths) ? filePaths.map(function (p) { return fs.resolve(p); }) : [fs.resolve(filePaths)];
        });
        var translations = translationLoader.loadBundles(translationFilePathsArrays, translationFileLocales);
        sourceRootPath = fs.resolve(sourceRootPath);
        resourceProcessor.translateFiles(sourceFilePaths.map(file_system_1.relativeFrom), fs.resolve(sourceRootPath), outputPathFn, translations, sourceLocale);
    }
    exports.translateFiles = translateFiles;
    /**
     * Parse each of the given string `args` and convert it to an array if it is of the form
     * `[abc, def, ghi]`, i.e. it is enclosed in square brackets with comma delimited items.
     * @param args The string to potentially convert to arrays.
     */
    function convertArraysFromArgs(args) {
        return args.map(function (arg) { return (arg.startsWith('[') && arg.endsWith(']')) ?
            arg.slice(1, -1).split(',').map(function (arg) { return arg.trim(); }) :
            arg; });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvY2FsaXplL3NyYy90b29scy9zcmMvdHJhbnNsYXRlL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUNBOzs7Ozs7T0FNRztJQUNILDJFQUF5SDtJQUN6SCwyQkFBNkI7SUFDN0IsNkJBQStCO0lBRS9CLDJFQUF1RTtJQUN2RSw2SEFBZ0Y7SUFDaEYscUZBQTREO0lBQzVELDBJQUE0RjtJQUM1RixxSEFBeUU7SUFDekUsaUtBQW1IO0lBQ25ILHVKQUEwRztJQUMxRyx1SkFBMEc7SUFDMUcsaUpBQW9HO0lBQ3BHLG1GQUF3QztJQUV4QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQzNCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQU0sT0FBTyxHQUNULEtBQUs7YUFDQSxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ1gsS0FBSyxFQUFFLE1BQU07WUFDYixRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFDSix3SEFBd0g7WUFDNUgsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDO2FBQ0QsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNYLEtBQUssRUFBRSxRQUFRO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQ0osc0dBQXNHO1lBQzFHLElBQUksRUFBRSxRQUFRO1NBQ2YsQ0FBQzthQUVELE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDWCxLQUFLLEVBQUUsZUFBZTtZQUN0QixRQUFRLEVBQ0osMktBQTJLO1lBQy9LLElBQUksRUFBRSxRQUFRO1NBQ2YsQ0FBQzthQUVELE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDWCxLQUFLLEVBQUUsY0FBYztZQUNyQixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUss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QztRQUVoRyxJQUFNLFlBQVksR0FDZCxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsMEJBQTBCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUN0RixjQUFjLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QyxpQkFBaUIsQ0FBQyxjQUFjLENBQzVCLGVBQWUsQ0FBQyxHQUFHLENBQUMsMEJBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFDekYsWUFBWSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQXpDRCx3Q0F5Q0M7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxxQkFBcUIsQ0FBQyxJQUFjO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FDWCxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQztZQUNwRCxHQUFHLEVBRkEsQ0FFQSxDQUFDLENBQUM7SUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2dldEZpbGVTeXN0ZW0sIE5vZGVKU0ZpbGVTeXN0ZW0sIHNldEZpbGVTeXN0ZW0sIHJlbGF0aXZlRnJvbX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQgKiBhcyBnbG9iIGZyb20gJ2dsb2InO1xuaW1wb3J0ICogYXMgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQge0RpYWdub3N0aWNIYW5kbGluZ1N0cmF0ZWd5LCBEaWFnbm9zdGljc30gZnJvbSAnLi4vZGlhZ25vc3RpY3MnO1xuaW1wb3J0IHtBc3NldFRyYW5zbGF0aW9uSGFuZGxlcn0gZnJvbSAnLi9hc3NldF9maWxlcy9hc3NldF90cmFuc2xhdGlvbl9oYW5kbGVyJztcbmltcG9ydCB7Z2V0T3V0cHV0UGF0aEZuLCBPdXRwdXRQYXRoRm59IGZyb20gJy4vb3V0cHV0X3BhdGgnO1xuaW1wb3J0IHtTb3VyY2VGaWxlVHJhbnNsYXRpb25IYW5kbGVyfSBmcm9tICcuL3NvdXJjZV9maWxlcy9zb3VyY2VfZmlsZV90cmFuc2xhdGlvbl9oYW5kbGVyJztcbmltcG9ydCB7VHJhbnNsYXRpb25Mb2FkZXJ9IGZyb20gJy4vdHJhbnNsYXRpb25fZmlsZXMvdHJhbnNsYXRpb25fbG9hZGVyJztcbmltcG9ydCB7U2ltcGxlSnNvblRyYW5zbGF0aW9uUGFyc2VyfSBmcm9tICcuL3RyYW5zbGF0aW9uX2ZpbGVzL3RyYW5zbGF0aW9uX3BhcnNlcnMvc2ltcGxlX2pzb25fdHJhbnNsYXRpb25fcGFyc2VyJztcbmltcG9ydCB7WGxpZmYxVHJhbnNsYXRpb25QYXJzZXJ9IGZyb20gJy4vdHJhbnNsYXRpb25fZmlsZXMvdHJhbnNsYXRpb25fcGFyc2Vycy94bGlmZjFfdHJhbnNsYXRpb25fcGFyc2VyJztcbmltcG9ydCB7WGxpZmYyVHJhbnNsYXRpb25QYXJzZXJ9IGZyb20gJy4vdHJhbnNsYXRpb25fZmlsZXMvdHJhbnNsYXRpb25fcGFyc2Vycy94bGlmZjJfdHJhbnNsYXRpb25fcGFyc2VyJztcbmltcG9ydCB7WHRiVHJhbnNsYXRpb25QYXJzZXJ9IGZyb20gJy4vdHJhbnNsYXRpb25fZmlsZXMvdHJhbnNsYXRpb25fcGFyc2Vycy94dGJfdHJhbnNsYXRpb25fcGFyc2VyJztcbmltcG9ydCB7VHJhbnNsYXRvcn0gZnJvbSAnLi90cmFuc2xhdG9yJztcblxuaWYgKHJlcXVpcmUubWFpbiA9PT0gbW9kdWxlKSB7XG4gIGNvbnN0IGFyZ3MgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7XG4gIGNvbnN0IG9wdGlvbnMgPVxuICAgICAgeWFyZ3NcbiAgICAgICAgICAub3B0aW9uKCdyJywge1xuICAgICAgICAgICAgYWxpYXM6ICdyb290JyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgZGVzY3JpYmU6XG4gICAgICAgICAgICAgICAgJ1RoZSByb290IHBhdGggb2YgdGhlIGZpbGVzIHRvIHRyYW5zbGF0ZSwgZWl0aGVyIGFic29sdXRlIG9yIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5LiBFLmcuIGBkaXN0L2VuYC4nLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdzJywge1xuICAgICAgICAgICAgYWxpYXM6ICdzb3VyY2UnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBkZXNjcmliZTpcbiAgICAgICAgICAgICAgICAnQSBnbG9iIHBhdHRlcm4gaW5kaWNhdGluZyB3aGF0IGZpbGVzIHRvIHRyYW5zbGF0ZSwgcmVsYXRpdmUgdG8gdGhlIGByb290YCBwYXRoLiBFLmcuIGBidW5kbGVzLyoqLypgLicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgLm9wdGlvbignbCcsIHtcbiAgICAgICAgICAgIGFsaWFzOiAnc291cmNlLWxvY2FsZScsXG4gICAgICAgICAgICBkZXNjcmliZTpcbiAgICAgICAgICAgICAgICAnVGhlIHNvdXJjZSBsb2NhbGUgb2YgdGhlIGFwcGxpY2F0aW9uLiBJZiB0aGlzIGlzIHByb3ZpZGVkIHRoZW4gYSBjb3B5IG9mIHRoZSBhcHBsaWNhdGlvbiB3aWxsIGJlIGNyZWF0ZWQgd2l0aCBubyB0cmFuc2xhdGlvbiBidXQganVzdCB0aGUgYCRsb2NhbGl6ZWAgY2FsbHMgc3RyaXBwZWQgb3V0LicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgLm9wdGlvbigndCcsIHtcbiAgICAgICAgICAgIGFsaWFzOiAndHJhbnNsYXRpb25zJyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgYXJyYXk6IHRydWUsXG4gICAgICAgICAgICBkZXNjcmliZTpcbiAgICAgICAgICAgICAgICAnQSBsaXN0IG9mIHBhdGhzIHRvIHRoZSB0cmFuc2xhdGlvbiBmaWxlcyB0byBsb2FkLCBlaXRoZXIgYWJzb2x1dGUgb3IgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkuXFxuJyArXG4gICAgICAgICAgICAgICAgJ0UuZy4gYC10IHNyYy9sb2NhbGUvbWVzc2FnZXMuZW4ueGxmIHNyYy9sb2NhbGUvbWVzc2FnZXMuZnIueGxmIHNyYy9sb2NhbGUvbWVzc2FnZXMuZGUueGxmYC5cXG4nICtcbiAgICAgICAgICAgICAgICAnSWYgeW91IHdhbnQgdG8gbWVyZ2UgbXVsdGlwbGUgdHJhbnNsYXRpb24gZmlsZXMgZm9yIGVhY2ggbG9jYWxlLCB0aGVuIHByb3ZpZGUgdGhlIGxpc3Qgb2YgZmlsZXMgaW4gYW4gYXJyYXkuXFxuJyArXG4gICAgICAgICAgICAgICAgJ05vdGUgdGhhdCB0aGUgYXJyYXlzIG11c3QgYmUgaW4gZG91YmxlIHF1b3RlcyBpZiB5b3UgaW5jbHVkZSBhbnkgd2hpdGVzcGFjZSB3aXRoaW4gdGhlIGFycmF5LlxcbicgK1xuICAgICAgICAgICAgICAgICdFLmcuIGAtdCBcIltzcmMvbG9jYWxlL21lc3NhZ2VzLmVuLnhsZiwgc3JjL2xvY2FsZS9tZXNzYWdlcy0yLmVuLnhsZl1cIiBbc3JjL2xvY2FsZS9tZXNzYWdlcy5mci54bGYsc3JjL2xvY2FsZS9tZXNzYWdlcy0yLmZyLnhsZl1gJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAub3B0aW9uKCd0YXJnZXQtbG9jYWxlcycsIHtcbiAgICAgICAgICAgIGFycmF5OiB0cnVlLFxuICAgICAgICAgICAgZGVzY3JpYmU6XG4gICAgICAgICAgICAgICAgJ0EgbGlzdCBvZiB0YXJnZXQgbG9jYWxlcyBmb3IgdGhlIHRyYW5zbGF0aW9uIGZpbGVzLCB3aGljaCB3aWxsIG92ZXJyaWRlIGFueSB0YXJnZXQgbG9jYWxlIHBhcnNlZCBmcm9tIHRoZSB0cmFuc2xhdGlvbiBmaWxlLlxcbicgK1xuICAgICAgICAgICAgICAgICdFLmcuIFwiLXQgZW4gZnIgZGVcIi4nLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIC5vcHRpb24oJ28nLCB7XG4gICAgICAgICAgICBhbGlhczogJ291dHB1dFBhdGgnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBkZXNjcmliZTogJ0Egb3V0cHV0IHBhdGggcGF0dGVybiB0byB3aGVyZSB0aGUgdHJhbnNsYXRlZCBmaWxlcyB3aWxsIGJlIHdyaXR0ZW4uXFxuJyArXG4gICAgICAgICAgICAgICAgJ1RoZSBwYXRoIG11c3QgYmUgZWl0aGVyIGFic29sdXRlIG9yIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5LlxcbicgK1xuICAgICAgICAgICAgICAgICdUaGUgbWFya2VyIGB7e0xPQ0FMRX19YCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIHRhcmdldCBsb2NhbGUuIEUuZy4gYGRpc3Qve3tMT0NBTEV9fWAuJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAub3B0aW9uKCdtJywge1xuICAgICAgICAgICAgYWxpYXM6ICdtaXNzaW5nVHJhbnNsYXRpb24nLFxuICAgICAgICAgICAgZGVzY3JpYmU6ICdIb3cgdG8gaGFuZGxlIG1pc3NpbmcgdHJhbnNsYXRpb25zLicsXG4gICAgICAgICAgICBjaG9pY2VzOiBbJ2Vycm9yJywgJ3dhcm5pbmcnLCAnaWdub3JlJ10sXG4gICAgICAgICAgICBkZWZhdWx0OiAnd2FybmluZycsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgLm9wdGlvbignZCcsIHtcbiAgICAgICAgICAgIGFsaWFzOiAnZHVwbGljYXRlVHJhbnNsYXRpb24nLFxuICAgICAgICAgICAgZGVzY3JpYmU6ICdIb3cgdG8gaGFuZGxlIGR1cGxpY2F0ZSB0cmFuc2xhdGlvbnMuJyxcbiAgICAgICAgICAgIGNob2ljZXM6IFsnZXJyb3InLCAnd2FybmluZycsICdpZ25vcmUnXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAuc3RyaWN0KClcbiAgICAgICAgICAuaGVscCgpXG4gICAgICAgICAgLnBhcnNlKGFyZ3MpO1xuXG4gIGNvbnN0IGZzID0gbmV3IE5vZGVKU0ZpbGVTeXN0ZW0oKTtcbiAgc2V0RmlsZVN5c3RlbShmcyk7XG5cbiAgY29uc3Qgc291cmNlUm9vdFBhdGggPSBvcHRpb25zWydyJ107XG4gIGNvbnN0IHNvdXJjZUZpbGVQYXRocyA9IGdsb2Iuc3luYyhvcHRpb25zWydzJ10sIHtjd2Q6IHNvdXJjZVJvb3RQYXRoLCBub2RpcjogdHJ1ZX0pO1xuICBjb25zdCB0cmFuc2xhdGlvbkZpbGVQYXRoczogKHN0cmluZ3xzdHJpbmdbXSlbXSA9IGNvbnZlcnRBcnJheXNGcm9tQXJncyhvcHRpb25zWyd0J10pO1xuICBjb25zdCBvdXRwdXRQYXRoRm4gPSBnZXRPdXRwdXRQYXRoRm4oZnMucmVzb2x2ZShvcHRpb25zWydvJ10pKTtcbiAgY29uc3QgZGlhZ25vc3RpY3MgPSBuZXcgRGlhZ25vc3RpY3MoKTtcbiAgY29uc3QgbWlzc2luZ1RyYW5zbGF0aW9uID0gb3B0aW9uc1snbSddIGFzIERpYWdub3N0aWNIYW5kbGluZ1N0cmF0ZWd5O1xuICBjb25zdCBkdXBsaWNhdGVUcmFuc2xhdGlvbiA9IG9wdGlvbnNbJ2QnXSBhcyBEaWFnbm9zdGljSGFuZGxpbmdTdHJhdGVneTtcbiAgY29uc3Qgc291cmNlTG9jYWxlOiBzdHJpbmd8dW5kZWZpbmVkID0gb3B0aW9uc1snbCddO1xuICBjb25zdCB0cmFuc2xhdGlvbkZpbGVMb2NhbGVzOiBzdHJpbmdbXSA9IG9wdGlvbnNbJ3RhcmdldC1sb2NhbGVzJ10gfHwgW107XG5cbiAgdHJhbnNsYXRlRmlsZXMoe1xuICAgIHNvdXJjZVJvb3RQYXRoLFxuICAgIHNvdXJjZUZpbGVQYXRocyxcbiAgICB0cmFuc2xhdGlvbkZpbGVQYXRocyxcbiAgICB0cmFuc2xhdGlvbkZpbGVMb2NhbGVzLFxuICAgIG91dHB1dFBhdGhGbixcbiAgICBkaWFnbm9zdGljcyxcbiAgICBtaXNzaW5nVHJhbnNsYXRpb24sXG4gICAgZHVwbGljYXRlVHJhbnNsYXRpb24sXG4gICAgc291cmNlTG9jYWxlXG4gIH0pO1xuXG4gIGRpYWdub3N0aWNzLm1lc3NhZ2VzLmZvckVhY2gobSA9PiBjb25zb2xlLndhcm4oYCR7bS50eXBlfTogJHttLm1lc3NhZ2V9YCkpO1xuICBwcm9jZXNzLmV4aXQoZGlhZ25vc3RpY3MuaGFzRXJyb3JzID8gMSA6IDApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0ZUZpbGVzT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgcm9vdCBwYXRoIG9mIHRoZSBmaWxlcyB0byB0cmFuc2xhdGUsIGVpdGhlciBhYnNvbHV0ZSBvciByZWxhdGl2ZSB0byB0aGUgY3VycmVudCB3b3JraW5nXG4gICAqIGRpcmVjdG9yeS4gRS5nLiBgZGlzdC9lbmBcbiAgICovXG4gIHNvdXJjZVJvb3RQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmlsZXMgdG8gdHJhbnNsYXRlLCByZWxhdGl2ZSB0byB0aGUgYHJvb3RgIHBhdGguXG4gICAqL1xuICBzb3VyY2VGaWxlUGF0aHM6IHN0cmluZ1tdO1xuICAvKipcbiAgICogQW4gYXJyYXkgb2YgcGF0aHMgdG8gdGhlIHRyYW5zbGF0aW9uIGZpbGVzIHRvIGxvYWQsIGVpdGhlciBhYnNvbHV0ZSBvciByZWxhdGl2ZSB0byB0aGUgY3VycmVudFxuICAgKiB3b3JraW5nIGRpcmVjdG9yeS5cbiAgICpcbiAgICogRm9yIGVhY2ggbG9jYWxlIHRvIGJlIHRyYW5zbGF0ZWQsIHRoZXJlIHNob3VsZCBiZSBhbiBlbGVtZW50IGluIGB0cmFuc2xhdGlvbkZpbGVQYXRoc2AuXG4gICAqIEVhY2ggZWxlbWVudCBpcyBlaXRoZXIgYW4gYWJzb2x1dGUgcGF0aCB0byB0aGUgdHJhbnNsYXRpb24gZmlsZSwgb3IgYW4gYXJyYXkgb2YgYWJzb2x1dGUgcGF0aHNcbiAgICogdG8gdHJhbnNsYXRpb24gZmlsZXMsIGZvciB0aGF0IGxvY2FsZS5cbiAgICpcbiAgICogSWYgdGhlIGVsZW1lbnQgY29udGFpbnMgbW9yZSB0aGFuIG9uZSB0cmFuc2xhdGlvbiBmaWxlLCB0aGVuIHRoZSB0cmFuc2xhdGlvbnMgYXJlIG1lcmdlZC5cbiAgICpcbiAgICogSWYgYWxsb3dlZCBieSB0aGUgYGR1cGxpY2F0ZVRyYW5zbGF0aW9uYCBwcm9wZXJ0eSwgd2hlbiBtb3JlIHRoYW4gb25lIHRyYW5zbGF0aW9uIGhhcyB0aGUgc2FtZVxuICAgKiBtZXNzYWdlIGlkLCB0aGUgbWVzc2FnZSBmcm9tIHRoZSBlYXJsaWVyIHRyYW5zbGF0aW9uIGZpbGUgaW4gdGhlIGFycmF5IGlzIHVzZWQuXG4gICAqXG4gICAqIEZvciBleGFtcGxlLCBpZiB0aGUgZmlsZXMgYXJlIGBbYXBwLnhsZiwgbGliLTEueGxmLCBsaWItMi54bGlmXWAgdGhlbiBhIG1lc3NhZ2UgdGhhdCBhcHBlYXJzIGluXG4gICAqIGBhcHAueGxmYCB3aWxsIG92ZXJyaWRlIHRoZSBzYW1lIG1lc3NhZ2UgaW4gYGxpYi0xLnhsZmAgb3IgYGxpYi0yLnhsZmAuXG4gICAqL1xuICB0cmFuc2xhdGlvbkZpbGVQYXRoczogKHN0cmluZ3xzdHJpbmdbXSlbXTtcbiAgLyoqXG4gICAqIEEgY29sbGVjdGlvbiBvZiB0aGUgdGFyZ2V0IGxvY2FsZXMgZm9yIHRoZSB0cmFuc2xhdGlvbiBmaWxlcy5cbiAgICpcbiAgICogSWYgdGhlcmUgaXMgYSBsb2NhbGUgcHJvdmlkZWQgaW4gYHRyYW5zbGF0aW9uRmlsZUxvY2FsZXNgIHRoZW4gdGhpcyBpcyB1c2VkIHJhdGhlciB0aGFuIGFcbiAgICogbG9jYWxlIGV4dHJhY3RlZCBmcm9tIHRoZSBmaWxlIGl0c2VsZi5cbiAgICogSWYgdGhlcmUgaXMgbmVpdGhlciBhIHByb3ZpZGVkIGxvY2FsZSBub3IgYSBsb2NhbGUgcGFyc2VkIGZyb20gdGhlIGZpbGUsIHRoZW4gYW4gZXJyb3IgaXNcbiAgICogdGhyb3duLlxuICAgKiBJZiB0aGVyZSBhcmUgYm90aCBhIHByb3ZpZGVkIGxvY2FsZSBhbmQgYSBsb2NhbGUgcGFyc2VkIGZyb20gdGhlIGZpbGUsIGFuZCB0aGV5IGFyZSBub3QgdGhlXG4gICAqIHNhbWUsIHRoZW4gYSB3YXJuaW5nIGlzIHJlcG9ydGVkLlxuICAgKi9cbiAgdHJhbnNsYXRpb25GaWxlTG9jYWxlczogKHN0cmluZ3x1bmRlZmluZWQpW107XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgY29tcHV0ZXMgdGhlIG91dHB1dCBwYXRoIG9mIHdoZXJlIHRoZSB0cmFuc2xhdGVkIGZpbGVzIHdpbGwgYmVcbiAgICogd3JpdHRlbi4gVGhlIG1hcmtlciBge3tMT0NBTEV9fWAgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSB0YXJnZXQgbG9jYWxlLiBFLmcuXG4gICAqIGBkaXN0L3t7TE9DQUxFfX1gLlxuICAgKi9cbiAgb3V0cHV0UGF0aEZuOiBPdXRwdXRQYXRoRm47XG4gIC8qKlxuICAgKiBBbiBvYmplY3QgdGhhdCB3aWxsIHJlY2VpdmUgYW55IGRpYWdub3N0aWNzIG1lc3NhZ2VzIGR1ZSB0byB0aGUgcHJvY2Vzc2luZy5cbiAgICovXG4gIGRpYWdub3N0aWNzOiBEaWFnbm9zdGljcztcbiAgLyoqXG4gICAqIEhvdyB0byBoYW5kbGUgbWlzc2luZyB0cmFuc2xhdGlvbnMuXG4gICAqL1xuICBtaXNzaW5nVHJhbnNsYXRpb246IERpYWdub3N0aWNIYW5kbGluZ1N0cmF0ZWd5O1xuICAvKipcbiAgICogSG93IHRvIGhhbmRsZSBkdXBsaWNhdGUgdHJhbnNsYXRpb25zLlxuICAgKi9cbiAgZHVwbGljYXRlVHJhbnNsYXRpb246IERpYWdub3N0aWNIYW5kbGluZ1N0cmF0ZWd5O1xuICAvKipcbiAgICogVGhlIGxvY2FsZSBvZiB0aGUgc291cmNlIGZpbGVzLlxuICAgKiBJZiB0aGlzIGlzIHByb3ZpZGVkIHRoZW4gYSBjb3B5IG9mIHRoZSBhcHBsaWNhdGlvbiB3aWxsIGJlIGNyZWF0ZWQgd2l0aCBubyB0cmFuc2xhdGlvbiBidXQganVzdFxuICAgKiB0aGUgYCRsb2NhbGl6ZWAgY2FsbHMgc3RyaXBwZWQgb3V0LlxuICAgKi9cbiAgc291cmNlTG9jYWxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlRmlsZXMoe1xuICBzb3VyY2VSb290UGF0aCxcbiAgc291cmNlRmlsZVBhdGhzLFxuICB0cmFuc2xhdGlvbkZpbGVQYXRocyxcbiAgdHJhbnNsYXRpb25GaWxlTG9jYWxlcyxcbiAgb3V0cHV0UGF0aEZuLFxuICBkaWFnbm9zdGljcyxcbiAgbWlzc2luZ1RyYW5zbGF0aW9uLFxuICBkdXBsaWNhdGVUcmFuc2xhdGlvbixcbiAgc291cmNlTG9jYWxlXG59OiBUcmFuc2xhdGVGaWxlc09wdGlvbnMpIHtcbiAgY29uc3QgZnMgPSBnZXRGaWxlU3lzdGVtKCk7XG4gIGNvbnN0IHRyYW5zbGF0aW9uTG9hZGVyID0gbmV3IFRyYW5zbGF0aW9uTG9hZGVyKFxuICAgICAgZnMsXG4gICAgICBbXG4gICAgICAgIG5ldyBYbGlmZjJUcmFuc2xhdGlvblBhcnNlcigpLFxuICAgICAgICBuZXcgWGxpZmYxVHJhbnNsYXRpb25QYXJzZXIoKSxcbiAgICAgICAgbmV3IFh0YlRyYW5zbGF0aW9uUGFyc2VyKCksXG4gICAgICAgIG5ldyBTaW1wbGVKc29uVHJhbnNsYXRpb25QYXJzZXIoKSxcbiAgICAgIF0sXG4gICAgICBkdXBsaWNhdGVUcmFuc2xhdGlvbiwgZGlhZ25vc3RpY3MpO1xuXG4gIGNvbnN0IHJlc291cmNlUHJvY2Vzc29yID0gbmV3IFRyYW5zbGF0b3IoXG4gICAgICBmcyxcbiAgICAgIFtcbiAgICAgICAgbmV3IFNvdXJjZUZpbGVUcmFuc2xhdGlvbkhhbmRsZXIoZnMsIHttaXNzaW5nVHJhbnNsYXRpb259KSxcbiAgICAgICAgbmV3IEFzc2V0VHJhbnNsYXRpb25IYW5kbGVyKGZzKSxcbiAgICAgIF0sXG4gICAgICBkaWFnbm9zdGljcyk7XG5cbiAgLy8gQ29udmVydCBhbGwgdGhlIGB0cmFuc2xhdGlvbkZpbGVQYXRoc2AgZWxlbWVudHMgdG8gYXJyYXlzLlxuICBjb25zdCB0cmFuc2xhdGlvbkZpbGVQYXRoc0FycmF5cyA9IHRyYW5zbGF0aW9uRmlsZVBhdGhzLm1hcChcbiAgICAgIGZpbGVQYXRocyA9PlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoZmlsZVBhdGhzKSA/IGZpbGVQYXRocy5tYXAocCA9PiBmcy5yZXNvbHZlKHApKSA6IFtmcy5yZXNvbHZlKGZpbGVQYXRocyldKTtcblxuICBjb25zdCB0cmFuc2xhdGlvbnMgPVxuICAgICAgdHJhbnNsYXRpb25Mb2FkZXIubG9hZEJ1bmRsZXModHJhbnNsYXRpb25GaWxlUGF0aHNBcnJheXMsIHRyYW5zbGF0aW9uRmlsZUxvY2FsZXMpO1xuICBzb3VyY2VSb290UGF0aCA9IGZzLnJlc29sdmUoc291cmNlUm9vdFBhdGgpO1xuICByZXNvdXJjZVByb2Nlc3Nvci50cmFuc2xhdGVGaWxlcyhcbiAgICAgIHNvdXJjZUZpbGVQYXRocy5tYXAocmVsYXRpdmVGcm9tKSwgZnMucmVzb2x2ZShzb3VyY2VSb290UGF0aCksIG91dHB1dFBhdGhGbiwgdHJhbnNsYXRpb25zLFxuICAgICAgc291cmNlTG9jYWxlKTtcbn1cblxuLyoqXG4gKiBQYXJzZSBlYWNoIG9mIHRoZSBnaXZlbiBzdHJpbmcgYGFyZ3NgIGFuZCBjb252ZXJ0IGl0IHRvIGFuIGFycmF5IGlmIGl0IGlzIG9mIHRoZSBmb3JtXG4gKiBgW2FiYywgZGVmLCBnaGldYCwgaS5lLiBpdCBpcyBlbmNsb3NlZCBpbiBzcXVhcmUgYnJhY2tldHMgd2l0aCBjb21tYSBkZWxpbWl0ZWQgaXRlbXMuXG4gKiBAcGFyYW0gYXJncyBUaGUgc3RyaW5nIHRvIHBvdGVudGlhbGx5IGNvbnZlcnQgdG8gYXJyYXlzLlxuICovXG5mdW5jdGlvbiBjb252ZXJ0QXJyYXlzRnJvbUFyZ3MoYXJnczogc3RyaW5nW10pOiAoc3RyaW5nfHN0cmluZ1tdKVtdIHtcbiAgcmV0dXJuIGFyZ3MubWFwKFxuICAgICAgYXJnID0+IChhcmcuc3RhcnRzV2l0aCgnWycpICYmIGFyZy5lbmRzV2l0aCgnXScpKSA/XG4gICAgICAgICAgYXJnLnNsaWNlKDEsIC0xKS5zcGxpdCgnLCcpLm1hcChhcmcgPT4gYXJnLnRyaW0oKSkgOlxuICAgICAgICAgIGFyZyk7XG59XG4iXX0=