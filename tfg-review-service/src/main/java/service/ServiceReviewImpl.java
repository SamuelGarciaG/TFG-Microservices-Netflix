package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.ReviewDao;
import model.Review;

@Service
public class ServiceReviewImpl implements ServiceReview {
	
	@Autowired
	ReviewDao dao;

	@Override
	public List<Review> getAllReviews() {
		return dao.getAllReviews();
	}

	@Override
	public List<Review> getReviewsByName(String name) {
		return dao.getReviewsByName(name);
	}

	@Override
	public List<Review> getReviewsByUser(String user) {
		return dao.getReviewsByUser(user);
	}
	
	@Override
	public boolean addReview(Review review) {
		if(dao.getReview(review.getIdReview())==null) {
			dao.addReview(review);
			return true;
		}
		return false;
	}
	

}
