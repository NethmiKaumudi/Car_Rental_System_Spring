package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.repository.PassWordResetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;

@Service
@Transactional
public class TokenCleanupServiceImpl {

    @Autowired
    private PassWordResetRepo passwordResetTokenRepository;

    @Scheduled(fixedRate = 3600000) // Run this task every hour (adjust the rate as needed)
    public void deleteExpiredTokens() {
        Date currentDate = new Date();
        passwordResetTokenRepository.deleteByExpiryDateBefore(currentDate);
    }
}
