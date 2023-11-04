package lk.ijse.car_rental_system.config;


import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({JPAConfig.class, SecurityConfig.class, MailConfig.class})
@ComponentScan(basePackages = "lk.ijse.car_rental_system.service")
public class WebRootConfig {
    public WebRootConfig() {
        System.out.println("WebRootConfig : Instantiated");
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

}
