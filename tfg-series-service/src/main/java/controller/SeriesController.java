package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import model.Series;
import service.ServiceSeries;

@RestController
@CrossOrigin(origins = "*")
public class SeriesController {

	@Autowired
	ServiceSeries service;
	
	@GetMapping (value ="series", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Series> getSeries() {
		return service.getSeries();
	}
	
	
	@GetMapping (value ="series/name/{seriesname}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Series getSeriesByName(@PathVariable("seriesname") String name){
		return service.getSeriesByName(name);
	}

	@GetMapping (value = "series/{seriesid}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Series getSeriesById(@PathVariable("seriesid") Integer id) {
		return service.getSeriesById(id);
	}
	
	@GetMapping (value ="series/genre/{genrename}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Series> getFilmsByGenre(@PathVariable("genrename") String genre) {
		return service.getSeriesByGenre(genre);
	}
	
	@GetMapping (value ="series/top", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Series> getTopSeries () {
		return service.getTopSeries();
	}
	


}
