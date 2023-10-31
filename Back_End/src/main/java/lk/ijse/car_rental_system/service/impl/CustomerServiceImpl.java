package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.dto.CustomerDTO;
import lk.ijse.car_rental_system.entity.Customer;
import lk.ijse.car_rental_system.repository.CustomerRepo;
import lk.ijse.car_rental_system.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addCustomer(CustomerDTO dto) {
        if (customerRepo.existsById(dto.getCustomerId())) {
            throw new RuntimeException(dto.getCustomerId() + "is already available, please insert a new ID");
        }
        Customer map = mapper.map(dto, Customer.class);
        customerRepo.save(map);
    }

    @Override
    public List<String> getCustomerIds() {
        return customerRepo.findCustomerIdsOnly();
    }

    @Override
    public CustomerDTO getCustomerDetailsById(String id) {
        Optional<Customer> customer = customerRepo.findById(id);
        if (customer.isPresent()) {
            return mapper.map(customer.get(), CustomerDTO.class);
        } else {
            throw new RuntimeException("Customer not found with ID: " + id);
        }
    }

}
