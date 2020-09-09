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
	public List<ObjectSearch> getFiltered(String search){
		return getResults()
				.stream()
				.filter(o->o.getGenre().contains(search)||o.getName().contains(search))
				.collect(Collectors.toList());
	}

}
