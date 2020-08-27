package service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.lang.ArrayUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import model.ObjectSearch;

@Service
public class SearchServiceImpl implements SearchService {
	
	@Autowired
	RestTemplate template;
	String urlFilm = "http://films-service";
	String urlSeries = "http://series-service";
	
	@Override
	public List<ObjectSearch> getResults(){
		ObjectSearch[] films = template.getForObject(urlFilm + "/films", ObjectSearch[].class);
		ObjectSearch[] series = template.getForObject(urlSeries + "/series", ObjectSearch[].class);
		ObjectSearch[] resultado = (ObjectSearch[]) ArrayUtils.addAll(films, series);
		return Arrays.asList(resultado);
	}
	
	@Override
	public List<ObjectSearch> getGenre(String genre){
		return getResults()
				.stream()
				.filter(o->o.getGenre().contains(genre))
				.collect(Collectors.toList());
	}
	
	@Override
	public List<ObjectSearch> getName(String name){
		return getResults()
				.stream()
				.filter(o->o.getName().contains(name))
				.collect(Collectors.toList());
	}
}
