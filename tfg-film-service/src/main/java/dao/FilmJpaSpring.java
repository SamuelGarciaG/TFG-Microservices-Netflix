package dao;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Film;

public interface FilmJpaSpring  extends JpaRepository<Film,Integer>{
	
}
