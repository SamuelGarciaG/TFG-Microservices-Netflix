package dao;

import java.util.List;

import model.Film;

public interface FilmDao {
	
	public List<Film> getFilms();
	public Film getFilmByName(String name);
	public Film getFilmById(Integer id);

}
