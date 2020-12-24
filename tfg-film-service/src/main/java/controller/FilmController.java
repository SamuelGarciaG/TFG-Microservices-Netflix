package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import model.Film;
import service.ServiceFilms;

@RestController
@CrossOrigin(origins = "*")
public class FilmController {

	@Autowired
	ServiceFilms service;
	
	@GetMapping (value ="films", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Film> getFilms () {
		return service.getFilms();
	}
	
	@GetMapping (value = "films/name/{filmname}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Film getFilmByName(@PathVariable("filmname") String name) {
		return service.getFilmByName(name);
	}
	
	@GetMapping (value = "films/{filmid}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Film getFilmById(@PathVariable("filmid") Integer id) {
		return service.getFilmById(id);
	}
	
	@GetMapping (value ="films/genre/{genrename}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Film> getFilmsByGenre(@PathVariable("genrename") String genre) {
		return service.getFilmsByGenre(genre);
	}
	
	@GetMapping (value ="films/top", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Film> getTopFilms () {
		return service.getTopFilms();
	}
	

}
