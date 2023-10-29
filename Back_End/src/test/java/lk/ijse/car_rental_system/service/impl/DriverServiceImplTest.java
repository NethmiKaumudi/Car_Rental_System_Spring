package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.config.WebRootConfig;
import lk.ijse.car_rental_system.repository.DriverRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;

@WebAppConfiguration // create testing context
@ContextConfiguration(classes = {WebRootConfig.class}) //load configurations which wanted for test context
@ExtendWith(SpringExtension.class)
class DriverServiceImplTest {

    @Autowired
    DriverRepo repo;
    @Test
    void addDriver() {

    }

    @Test
    void deleteDriver() {
    }

    @Test
    void getAllDriver() {
    }

    @Test
    void findDrver() {
    }

    @Test
    void updateDriver() {
    }
}