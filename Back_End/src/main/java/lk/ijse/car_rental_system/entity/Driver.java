package lk.ijse.car_rental_system.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Driver {
    @Id
    @Column(name = "driver_id", columnDefinition = "VARCHAR(64)")
    private String driverId;
    private String driverNic;
    private String driverName;
    private String driverAddress;
    private String driverContact;
    private String driverLicenceNo;

}
