package dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import model.Review;

public interface ReviewJpaSpring extends JpaRepository<Review, Integer>{
	
	List<Review> findByName(String name);
	List<Review> findByUser(String user);
	

}
