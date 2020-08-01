package service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import model.Film;

@Service
public class SearchServiceImpl implements SearchService {
	
	@Autowired
	RestTemplate template;
	String urlFilm = "http://films-service";
/*
	@Override
	public List<Object> getFilms(){
		String resultado = template.getForObject(urlFilm, String.class);
		ObjectMapper maper=new ObjectMapper();
		List<Object> films =new ArrayList<>();
		ArrayNode array;
		try {
			//obtenemos ArrayJoson con los datos de la respuesta
			array = (ArrayNode)maper.readTree(resultado);
			for(Object ob:array) {
				//obtenemos el objeto Json y extraemos
				//las propiedades que nos interesan
				ObjectNode json=(ObjectNode)ob;
				films.add(new Film(json.get("idfilm").asInt(), 
						json.get("duration").asInt(),
						json.get("genre").asText(),
						json.get("name").asText()));
			}
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}			
			
		return films;
	}
*/
	
	@Override
	public List<Film> getFilms(){
		Film[] films = template.getForObject(urlFilm + "/films", Film[].class);
		return Arrays.asList(films);
	}
	
	@Override
	public List<Film> getGenre(String genre){
		return getFilms()
				.stream()
				.filter(f->f.getGenre().contains(genre))
				.collect(Collectors.toList());
	}
}
