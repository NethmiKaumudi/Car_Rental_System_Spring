package lk.ijse.car_rental_system.util;

import java.security.SecureRandom;

public class RandomStringUtils {
    private static final String ALPHANUMERIC_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final SecureRandom secureRandom = new SecureRandom();
    private String generateResetToken() {
        // Generate a random token with 40 characters
        String token = RandomStringUtils.randomAlphanumeric(40);
        return token;
    }

    public static String randomAlphanumeric(int length) {
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            int randomIndex = secureRandom.nextInt(ALPHANUMERIC_CHARACTERS.length());
            char randomChar = ALPHANUMERIC_CHARACTERS.charAt(randomIndex);
            sb.append(randomChar);
        }
        return sb.toString();
    }
}
