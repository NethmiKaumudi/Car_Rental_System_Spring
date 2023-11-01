package lk.ijse.car_rental_system.repository;

import lk.ijse.car_rental_system.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomerRepo extends JpaRepository<Customer, String> {
    //    List<String> findByCustomerId();
    @Query("SELECT c.customerId FROM Customer c")
    List<String> findCustomerIdsOnly();

    Customer findByCustomerId(String customerId);

    Customer findTopByOrderByCustomerIdDesc();

}
