package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.repository.VehicleRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class VehicleServiceImpl {
    @Autowired
    VehicleRepo repo;

    @Autowired
    ModelMapper map;

}
