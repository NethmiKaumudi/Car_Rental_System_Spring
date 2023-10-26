package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.entity.PassWordResetToken;
import lk.ijse.car_rental_system.repository.PassWordResetRepo;
import lk.ijse.car_rental_system.service.PasswordResetTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;

@Service
@Transactional
public class PassWordResetTokenServiceImpl implements PasswordResetTokenService {
    @Autowired
    private PassWordResetRepo passWordResetRepo;

    public PassWordResetToken findByToken(String token) {
        return passWordResetRepo.findByToken(token);
    }

    public void saveToken(PassWordResetToken token) {
        passWordResetRepo.save(token);
    }

    public void deleteToken(PassWordResetToken token) {
        passWordResetRepo.delete(token);
    }

    public void deleteExpiredTokens() {
        passWordResetRepo.deleteByExpiryDateBefore(new Date());
    }
}
