package lk.ijse.car_rental_system.service;

import lk.ijse.car_rental_system.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    void addCustomer(CustomerDTO dto);

    List<String> getCustomerIds();

    CustomerDTO getCustomerDetailsById(String customerId);

    String generateNextCustomerId();
}
