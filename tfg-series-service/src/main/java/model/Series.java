package model;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name="series")
@NamedQuery(name="Series.findAll", query="SELECT s FROM Series s")
public class Series implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idseries;

	private int duration;

	private String genre;

	private String name;

	private int year;
	
	private int episodes;

	private int seasons;
	
	private float rating;
	
	private String summary;

	private String urlimg;

	private String urltrailer;
	
	private String reviews;

	public Series() {
	}
	
	public int getIdseries() {
		return idseries;
	}

	public void setIdseries(int idseries) {
		this.idseries = idseries;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getUrlimg() {
		return urlimg;
	}

	public void setUrlimg(String urlimg) {
		this.urlimg = urlimg;
	}

	public int getSeasons() {
		return seasons;
	}

	public void setSeasons(int seasons) {
		this.seasons = seasons;
	}

	public int getEpisodes() {
		return episodes;
	}

	public void setEpisodes(int episodes) {
		this.episodes = episodes;
	}

	public String getUrltrailer() {
		return urltrailer;
	}

	public void setUrltrailer(String urltrailer) {
		this.urltrailer = urltrailer;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public String getReviews() {
		return reviews;
	}

	public void setReviews(String reviews) {
		this.reviews = reviews;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	
}
