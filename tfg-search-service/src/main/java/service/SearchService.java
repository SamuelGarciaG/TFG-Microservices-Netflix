package service;

import java.util.List;
import model.ObjectSearch;

public interface SearchService {
	
	List<ObjectSearch> getResults();
	List<ObjectSearch> getFiltered(String genre);
}
