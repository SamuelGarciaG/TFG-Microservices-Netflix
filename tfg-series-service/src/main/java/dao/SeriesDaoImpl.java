package dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import model.Series;

@Repository
public class SeriesDaoImpl implements SeriesDao {
	@Autowired
	SeriesJpaSpring series;
	
	@Override
	public List<Series> getSeries() {		
		return series.findAll();
	}
	
	@Override
	public Series getSeriesByName(String name) {
		return series.findByName(name);
	}

	@Override
	public Series getSeriesById(Integer id) {
		return series.findByIdseries(id);
	}

}
