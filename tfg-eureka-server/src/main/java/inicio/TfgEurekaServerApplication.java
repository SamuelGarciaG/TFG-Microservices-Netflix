package inicio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class TfgEurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TfgEurekaServerApplication.class, args);
	}

}
