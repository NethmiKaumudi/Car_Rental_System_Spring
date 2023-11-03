package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.service.TokenService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
@Transactional
public class TokenServiceImpl  implements TokenService {

    private Map<String, String> tokens = new HashMap<>(); // You can replace this with a more persistent storage, like a database

    public void storeToken(String email, String token) {
        tokens.put(email, token);
    }

    public String retrieveToken(String token) {
        for (Map.Entry<String, String> entry : tokens.entrySet()) {
            if (entry.getValue().equals(token)) {
                return entry.getKey();
            }
        }
        return null; // Token not found
    }

    public String generateUniqueToken() {
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }
}
