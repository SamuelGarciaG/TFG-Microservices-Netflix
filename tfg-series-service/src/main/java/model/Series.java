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

}
