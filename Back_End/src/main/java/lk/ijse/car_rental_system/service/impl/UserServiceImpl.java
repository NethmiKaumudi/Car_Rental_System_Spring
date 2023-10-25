package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.dto.UserDTO;
import lk.ijse.car_rental_system.entity.User;
import lk.ijse.car_rental_system.repository.UserRepo;
import lk.ijse.car_rental_system.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addUser(UserDTO dto) {
        if (userRepo.existsById(dto.getUserId())) {
            throw new RuntimeException(dto.getUserId() + "is already available, please insert a new ID");
        }
        User map = mapper.map(dto, User.class);
        userRepo.save(map);
    }
}
