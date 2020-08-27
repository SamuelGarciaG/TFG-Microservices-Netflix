package service;

import java.util.List;
import model.ObjectSearch;

public interface SearchService {
	
	List<ObjectSearch> getResults();
	List<ObjectSearch> getGenre(String genre);
	List<ObjectSearch> getName(String name);
}
