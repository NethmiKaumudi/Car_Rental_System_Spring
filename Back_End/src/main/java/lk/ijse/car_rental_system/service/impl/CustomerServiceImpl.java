package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.dto.CustomerDTO;
import lk.ijse.car_rental_system.entity.Customer;
import lk.ijse.car_rental_system.repository.CustomerRepo;
import lk.ijse.car_rental_system.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Base64;
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
    public void addCustomer(CustomerDTO customerDTO) {
        try {
            Customer customer = mapper.map(customerDTO, Customer.class);
            // Decode and set the image
            customer.setImage(decodeBase64ToImage(customerDTO.getImage()));
            customer = customerRepo.save(customer);
        } catch (Exception e) {
            throw new RuntimeException("Error adding customer: " + e.getMessage());
        }
    }

    private byte[] decodeBase64ToImage(String base64Image) {
        try {
            String[] parts = base64Image.split(",");
            return Base64.getDecoder().decode(parts[1]);
        } catch (Exception e) {
            throw new RuntimeException("Error decoding image: " + e.getMessage());
        }
    }

    @Override
    public List<String> getCustomerIds() {

        return customerRepo.findCustomerIdsOnly();
    }

    public CustomerDTO getCustomerDetailsById(String customerId) {
        Customer customer = customerRepo.findById(customerId).orElse(null);

        if (customer != null) {
            CustomerDTO customerDTO = new CustomerDTO();
            customerDTO.setCustomerName(customer.getCustomerName());
            customerDTO.setNic(customer.getNic());
            customerDTO.setCustomerContact(customer.getCustomerContact());
            customerDTO.setCustomerEmail(customer.getCustomerEmail());

            return customerDTO;
        }

        return null;
    }

    @Override
    public String generateNextCustomerId() {
        Customer lastCustomer = customerRepo.findTopByOrderByCustomerIdDesc();
        if (lastCustomer != null) {
            String lastCustomerId = lastCustomer.getCustomerId();
            int lastCustomerNo = Integer.parseInt(lastCustomerId.substring(1));
            String nextCustomeriD = "C" + String.format("%03d", lastCustomerNo + 1);
            return nextCustomeriD;
        } else {
            return "C001";
        }
    }


    @Override
    public CustomerDTO findCustomer(String id) {
        if (!customerRepo.existsById(id)) {
            throw new RuntimeException(id + "is not exist,please check the id ..........");
        }
        Customer customer = customerRepo.findById(id).get();
        return mapper.map(customer, CustomerDTO.class);
    }

    @Override
    public void updateDriver(CustomerDTO c) {
        if (!customerRepo.existsById(c.getCustomerId())) {
            throw new RuntimeException(c.getCustomerId() + "is not exist,please check the id before updated");
        }
        Customer map = mapper.map(c, Customer.class);
        customerRepo.save(map);
    }

    public Customer getCustomerById(String customerId) {
        Optional<Customer> customer = customerRepo.findById(customerId);
        return customer.orElse(null);
    }

    public List<Customer> getAllCustomers() {
        return customerRepo.findAll();
    }

    public void deleteCustomer(String customerId) {
        customerRepo.deleteById(customerId);
    }
}
