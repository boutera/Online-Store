package in.rajavamsikrishna.onlineshopping;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class OnlineshoppingApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineshoppingApplication.class, args);
	}

}
