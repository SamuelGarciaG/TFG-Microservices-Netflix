package dao;

import org.springframework.data.jpa.repository.JpaRepository;
import model.Series;

public interface SeriesJpaSpring extends JpaRepository<Series,Integer>{

	Series findByName(String name);
	Series findByIdseries(Integer id);
	
}
