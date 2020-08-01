package model;


public class Film{

	private int idfilm;
	private int duration;
	private String genre;
	private String name;

	public Film() {
		
	}

	public Film(int idfilm, int duration, String genre, String name) {
		super();
		this.idfilm = idfilm;
		this.duration = duration;
		this.genre = genre;
		this.name = name;
	}

	public int getIdfilm() {
		return this.idfilm;
	}

	public void setIdfilm(int idfilm) {
		this.idfilm = idfilm;
	}

	public int getDuration() {
		return this.duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public String getGenre() {
		return this.genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
