package lk.ijse.car_rental_system.service;

import lk.ijse.car_rental_system.entity.PassWordResetToken;

public interface PasswordResetTokenService {
    public PassWordResetToken findByToken(String token);

    public void saveToken(PassWordResetToken token);


    public void deleteToken(PassWordResetToken token);

    public void deleteExpiredTokens();
}
