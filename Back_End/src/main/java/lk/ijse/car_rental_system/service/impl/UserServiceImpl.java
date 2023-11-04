package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.dto.UserDTO;
import lk.ijse.car_rental_system.entity.User;
import lk.ijse.car_rental_system.repository.UserRepo;
import lk.ijse.car_rental_system.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper mapper;
    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Override
    public void addUser(UserDTO dto) {

        if (userRepo.existsById(dto.getUserId())) {
            throw new RuntimeException(dto.getUserId() + " is already available, please insert a new ID");
        }
        // Hash the user's password before saving
        String hashedPassword = passwordEncoder.encode(dto.getPassword());
        dto.setPassword(hashedPassword);

        User user = mapper.map(dto, User.class);
        userRepo.save(user);
    }

    public String findPasswordByUsername(String userName) {
        return userRepo.findPasswordByUserName(userName);
    }

    public String findUserRoleByUsername(String userName) {
        return userRepo.findUserRoleByUserName(userName);
    }

    public User findByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    public boolean updatePassword(String email, String newPassword) {
        User user = userRepo.findByEmail(email);

        if (user != null) {
            user.setPassword(passwordEncoder.encode(newPassword));
            userRepo.save(user);
            return true;
        }
        return false;
    }


}
