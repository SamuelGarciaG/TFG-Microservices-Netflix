package inicio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.client.RestTemplate;

@EntityScan(basePackages = {"model"})
@EnableJpaRepositories(basePackages = {"dao"})
@ComponentScan (basePackages = {"controller","dao","service"})
@SpringBootApplication
public class TfgFilmServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TfgFilmServiceApplication.class, args);
	}

    @Bean(value = "restTemplate")
    @LoadBalanced
	public RestTemplate template() {
		return new RestTemplate();
	}

}
