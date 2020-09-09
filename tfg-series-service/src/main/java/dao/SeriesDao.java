package dao;

import java.util.List;

import model.Series;

public interface SeriesDao {
	
	public List<Series> getSeries();
	public Series getSeriesByName(String name);
	public Series getSeriesById(Integer id);

}
