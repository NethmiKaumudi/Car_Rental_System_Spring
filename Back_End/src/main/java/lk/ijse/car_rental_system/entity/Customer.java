package lk.ijse.car_rental_system.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Customer {
    @Id
    private String customerId;
    private String nic;
    private String customerName;
    private String customerAddress;
    private String customerContact;
    private String customerLicenceNo;
    private String customerEmail;
    private MultipartFile file;



}
