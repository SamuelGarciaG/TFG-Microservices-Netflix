package inicio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.client.RestTemplate;

@ComponentScan(basePackages= {"controller","service"})
@SpringBootApplication
public class TfgGalleryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TfgGalleryServiceApplication.class, args);
	}

    @Bean(value = "restTemplate")
    @LoadBalanced
	public RestTemplate template() {
		return new RestTemplate();
	}
}
