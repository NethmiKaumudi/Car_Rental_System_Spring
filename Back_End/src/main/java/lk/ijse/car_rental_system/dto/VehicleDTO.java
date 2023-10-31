package lk.ijse.car_rental_system.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class VehicleDTO {
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

}
