package service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import dao.SeriesDao;
import model.Series;

@Service
public class ServiceSeriesImpl implements ServiceSeries {
	
	@Autowired
	SeriesDao dao;
	
	@Autowired
	RestTemplate template;
	
	String urlReviews = "http://review-service/review/";
	
	@Override
	public List<Series> getSeries() {
		List<Series> series = dao.getSeries();
		Collections.shuffle(series, new Random(System.nanoTime()));
		return series;
	}

	@Override
	public Series getSeriesByName(String name) {
		Series series = dao.getSeriesByName(name);
		String reviews = template.getForObject(urlReviews + series.getName() , String.class);
		series.setReviews(reviews);
		return series;
	}

	@Override
	public Series getSeriesById(Integer id) {
		Series series = dao.getSeriesById(id);
		String reviews = template.getForObject(urlReviews + series.getName() , String.class);
		series.setReviews(reviews);
		return series;
	}

	@Override
	public List<Series> getSeriesByGenre(String genre) {
		List<Series >series = dao.getSeries();
		series = series.stream()
				.filter(o->o.getGenre().contains(genre))
				.collect(Collectors.toList());
		Collections.shuffle(series, new Random(System.nanoTime()));
		return series;
	}

	@Override
	public List<Series> getTopSeries() {
		List<Series> series = dao.getSeries();
		series.sort(Comparator.comparingDouble(Series::getRating)
	              .reversed());
		return series.subList(0, 9);
	}
}
