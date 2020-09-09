package dao;

import java.util.List;

import model.Review;

public interface ReviewDao {
	
	public List<Review> getAllReviews();
	public List<Review> getReviewsByName(String name);
	public List<Review> getReviewsByUser(String user);
	public Review getReview(Integer id);
	public void addReview(Review review);

}
