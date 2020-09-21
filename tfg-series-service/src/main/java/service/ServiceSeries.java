package service;

import java.util.List;
import model.Series;

public interface ServiceSeries {

	public List<Series> getSeries();
	public Series getSeriesByName(String name);
	public Series getSeriesById(Integer id);
	public List<Series> getSeriesByGenre(String genre);
	public List<Series> getTopSeries();
}
