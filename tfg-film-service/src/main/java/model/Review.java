package model;

public class Review{
	private int idReview;

	private String name;
	
	private float rating;

	private String user;

	private String comment;

	private int film;

	public Review() {
	}

	public int getIdReview() {
		return idReview;
	}

	public void setIdReview(int idreview) {
		this.idReview = idreview;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}
	
	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public int getFilm() {
		return film;
	}

	public void setFilm(int film) {
		this.film = film;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

}
