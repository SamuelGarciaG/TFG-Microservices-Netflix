package model;

public class ObjectSearch {
	
	private int idseries = -1;
	private int idfilm = -1;
	private int duration;
	private String genre;
	private String name;
	private int seasons;
	private String summary;
	private String urlimg;
	
	public ObjectSearch() {
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}


	public int getIdseries() {
		return idseries;
	}


	public void setIdseries(int idseries) {
		this.idseries = idseries;
	}


	public int getIdfilm() {
		return idfilm;
	}


	public void setIdfilm(int idfilm) {
		this.idfilm = idfilm;
	}


	public int getDuration() {
		return duration;
	}


	public void setDuration(int duration) {
		this.duration = duration;
	}


	public int getSeasons() {
		return seasons;
	}


	public void setSeasons(int seasons) {
		this.seasons = seasons;
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

	
}
