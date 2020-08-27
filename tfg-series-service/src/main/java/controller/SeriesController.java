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


@CrossOrigin(origins="*")
@RestController
public class SeriesController {

	@Autowired
	ServiceSeries service;
	
	@GetMapping (value ="series", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Series> getSeries() {
		return service.getSeries();
	}
	
	@GetMapping (value ="series/{seriesname}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Series getSeriesByName(@PathVariable("seriesname") String name){
		return service.getSeriesByName(name);
	}


}
