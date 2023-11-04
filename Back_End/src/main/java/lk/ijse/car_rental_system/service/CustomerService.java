package lk.ijse.car_rental_system.service;

import lk.ijse.car_rental_system.dto.CustomerDTO;
import lk.ijse.car_rental_system.entity.Customer;

import java.util.List;

public interface CustomerService {
    void addCustomer(CustomerDTO dto);

    List<String> getCustomerIds();

    CustomerDTO getCustomerDetailsById(String customerId);

    String generateNextCustomerId();

    //    Customer getCustomerByCustomerId(String customerId);
//
//    Customer updateCustomer(Customer customer);
    CustomerDTO findCustomer(String id);

    void updateDriver(CustomerDTO c);

    public Customer getCustomerById(String customerId);

    public List<Customer> getAllCustomers();

    public void deleteCustomer(String customerId);
}
