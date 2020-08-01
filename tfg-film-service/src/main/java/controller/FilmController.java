package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import model.Film;
import service.ServiceFilms;

@CrossOrigin(origins="*")
@RestController
public class FilmController {
	
	@Autowired
	ServiceFilms service;
	
	@GetMapping (value ="films", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Film> devolverHoteles () {
		return service.getFilms();
	}

}
