package service;

import java.util.List;
import model.Film;


public interface ServiceFilms {

	public List<Film> getFilms();
	public Film getFilmById(Integer id);
	public Film getFilmByName(String name);
	public List<Film> getFilmsByGenre(String genre);
	public List<Film> getTopFilms();
	
}
