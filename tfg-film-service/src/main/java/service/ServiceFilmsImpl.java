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
	//return hoteles.stream().filter(t->t.getDisponible()==1).collect(Collectors.toList());

	

}
