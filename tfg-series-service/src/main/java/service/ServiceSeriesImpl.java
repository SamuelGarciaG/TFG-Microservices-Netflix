package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.SeriesDao;
import model.Series;

@Service
public class ServiceSeriesImpl implements ServiceSeries {
	
	@Autowired
	SeriesDao dao;
	
	@Override
	public List<Series> getSeries() {
		List<Series> series = dao.getSeries();
		return series;
	}
	
	@Override
	public Series getSeriesByName(String name) {
		Series series = dao.getSeriesByName(name);
		return series;
	}
}
