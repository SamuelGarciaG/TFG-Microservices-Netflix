package service;

import java.util.List;

import model.Film;

public interface SearchService {
	
	List<Film> getFilms();
	List<Film> getGenre(String genre);
}
