package lk.ijse.car_rental_system.service;

public interface TokenService {
    public void storeToken(String email, String token);

    public String retrieveToken(String token);

    public String generateUniqueToken();
}
