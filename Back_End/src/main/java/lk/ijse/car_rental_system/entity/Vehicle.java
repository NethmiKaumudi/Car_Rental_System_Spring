package lk.ijse.car_rental_system.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Vehicle {
    @Id
    @Column(name = "vehicle_id", columnDefinition = "VARCHAR(64)")
    private String vehicleId;
    private String regNo;
    private String vehicleBrand;
    private String vehicleColour;
    private String vehicleType;
    private Integer noOfPassengers;
    private Double dailyRate;
    private String freeKmADay;
    private Double monthlyRate;
    private String freeKmAMonth;
    private Double priceExtraKm;
    private String fuelType;
    private String transmissionType;
    private String distanceDriven;
    private Integer qty;
    private BigDecimal lossDamageVawier;


}
