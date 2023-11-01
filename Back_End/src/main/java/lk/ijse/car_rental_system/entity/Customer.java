package lk.ijse.car_rental_system.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
//@ToString
public class Customer {
    @Id
    @Column(name = "customer_id", columnDefinition = "VARCHAR(24)")
    private String customerId;
    private String nic;
    private String customerName;
    private String customerAddress;
    private String customerContact;
    private String customerLicenceNo;
    private String customerEmail;
    //    private String imagePath; // Store the file path or identifier
    @Lob // Use this annotation to store large binary data (e.g., images)
    private byte[] image; // This field will store the image data


}
