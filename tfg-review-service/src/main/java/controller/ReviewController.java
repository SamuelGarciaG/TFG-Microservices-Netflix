package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import model.Review;
import service.ServiceReview;

@RestController
@CrossOrigin(origins = "*")
public class ReviewController {
	
	@Autowired
	ServiceReview service;

	@GetMapping (value ="review", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Review> getAllReviews() {
		return service.getAllReviews();
	}

	@GetMapping (value ="review/{productname}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Review> getSeriesByName(@PathVariable("productname") String name){
		return service.getReviewsByName(name);
	}

	@GetMapping (value ="review/user/{username}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Review> getSeriesByUser(@PathVariable("username") String user){
		return service.getReviewsByUser(user);
	}

	@PostMapping(value = "review/add", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
	public String addReview(@RequestBody Review review) {
		return String.valueOf(service.addReview(review));
	}
	

}
