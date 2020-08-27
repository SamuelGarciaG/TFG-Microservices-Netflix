package inicio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages= {"controller","service","model"})
@SpringBootApplication
public class TfgDonationsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TfgDonationsServiceApplication.class, args);
	}

}
