package lk.ijse.car_rental_system.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DriverDTO {
    private String driverId;
    private String driverNic;
    private String driverName;
    private String driverAddress;
    private String driverContact;
    private String driverLicenceNo;
}
