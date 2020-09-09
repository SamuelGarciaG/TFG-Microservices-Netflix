package dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import model.Review;

@Repository
public class ReviewDaoImpl implements ReviewDao {
	
	@Autowired
	ReviewJpaSpring review;
	

	public Review getReview(Integer id) {		
		return review.findById(id).orElse(null);
	}
	
	@Override
	public List<Review> getAllReviews() {		
		return review.findAll();
	}
	
	@Override
	public List<Review> getReviewsByName(String name){
		return review.findByName(name);
	}

	@Override
	public List<Review> getReviewsByUser(String user) {
		return review.findByUser(user);
	}

	@Override
	public void addReview(Review reviewToSave) {
		review.save(reviewToSave);
		
	}


}
