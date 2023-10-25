package lk.ijse.car_rental_system.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"lk.ijse.car_rental_system.controller", "lk.ijse.car_rental_system.adviser"})
public class WebAppConfig {
    public WebAppConfig() {
        System.out.println("WebAppConfig:Web App Instantiated");
    }

}
