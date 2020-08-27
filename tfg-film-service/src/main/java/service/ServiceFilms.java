package service;

import java.util.List;
import model.Film;


public interface ServiceFilms {

	public List<Film> getFilms();
	public Film getFilmByName(String name);
}
