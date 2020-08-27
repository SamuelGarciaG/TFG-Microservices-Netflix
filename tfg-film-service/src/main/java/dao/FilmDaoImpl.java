package dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import model.Film;

@Repository
public class FilmDaoImpl implements FilmDao {
	@Autowired
	FilmJpaSpring films;
	
	@Override
	public List<Film> getFilms() {		
		return films.findAll();
	}
	
	@Override
	public Film getFilmByName(String name) {
		return films.findByName(name);
	}

}
