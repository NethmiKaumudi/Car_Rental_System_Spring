package lk.ijse.car_rental_system.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
//@ToString
@Data
public class CustomerDTO {
    private String customerId;
    private String nic;
    private String customerName;
    private String customerAddress;
    private String customerContact;
    private String customerLicenceNo;
    private String customerEmail;
    private String image;
}
