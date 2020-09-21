package service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import dao.FilmDao;
import model.Film;

@Service
public class ServiceFilmsImpl implements ServiceFilms{
	
	@Autowired
	FilmDao dao;
	
	@Autowired
	RestTemplate template;
	
	String urlReviews = "http://review-service/review/";
	
	@Override
	public List<Film> getFilms() {
		List<Film> films = dao.getFilms();
		Collections.shuffle(films, new Random(System.nanoTime()));
		return films;
	}
	
	@Override
	public Film getFilmByName(String name) {
		Film film = dao.getFilmByName(name);
		String reviews = template.getForObject(urlReviews + film.getName() , String.class);
		film.setReviews(reviews);
		return film;
	}

	@Override
	public List<Film> getFilmsByGenre(String genre) {
		List<Film> films = dao.getFilms();
		films = films.stream()
				.filter(o->o.getGenre().contains(genre))
				.collect(Collectors.toList());
		Collections.shuffle(films, new Random(System.nanoTime()));
		return films;
	}

	@Override
	public Film getFilmById(Integer id) {
		Film film = dao.getFilmById(id);
		String reviews = template.getForObject(urlReviews + film.getName() , String.class);
		film.setReviews(reviews);
		return film;
	}
	
	@Override
	public List<Film> getTopFilms() {
		List<Film> films = dao.getFilms();
		films.sort(Comparator.comparingDouble(Film::getRating)
                .reversed());
		return films.subList(0, 9);
	}
	

}
