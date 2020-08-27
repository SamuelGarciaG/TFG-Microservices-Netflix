package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import model.ObjectSearch;
import service.SearchService;

@CrossOrigin(origins="*")
@RestController
public class SearchController {
	
	@Autowired
	SearchService service;
	
	@GetMapping(value="genre/{genretosearch}", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<ObjectSearch> getGenre(@PathVariable("genretosearch") String genre) {
		return this.service.getGenre(genre);
	}
	
	@GetMapping(value="name/{nametosearch}", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<ObjectSearch> getName(@PathVariable("nametosearch") String name) {
		return this.service.getName(name);
	}

}
