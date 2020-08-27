package model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reviews")
public class Review implements Serializable{
	private static final long serialVersionUID = 2L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idReview;
	
	private int rating;

	private String genre;

	private String name;
	
	private String user;

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public Review() {
	}

	public int getIdReview() {
		return idReview;
	}

	public void setIdReview(int idreview) {
		this.idReview = idreview;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
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
	
	

}
