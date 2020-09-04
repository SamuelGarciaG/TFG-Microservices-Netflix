package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.FilmDao;
import model.Film;

@Service
public class ServiceFilmsImpl implements ServiceFilms{
	
	@Autowired
	FilmDao dao;
	
	@Override
	public List<Film> getFilms() {
		List<Film> films = dao.getFilms();
		return films;
	}
	
	@Override
	public Film getFilmByName(String name) {
		Film film = dao.getFilmByName(name);
		return film;
	}

	@Override
	public List<Film> getFilmsByGenre(String genre) {
		List<Film> films = dao.getFilmByGenre(genre);
		return films;
	}

	@Override
	public Film getFilmById(Integer id) {
		return dao.getFilmById(id);
	}

	

}
