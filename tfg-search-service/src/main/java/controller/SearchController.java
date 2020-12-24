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

@RestController
@CrossOrigin(origins = "*")
public class SearchController {

	@Autowired
	SearchService service;

	@GetMapping(value="{datatosearch}", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<ObjectSearch> getGenre(@PathVariable("datatosearch") String search) {
		return this.service.getFiltered(search);
	}
	

}
