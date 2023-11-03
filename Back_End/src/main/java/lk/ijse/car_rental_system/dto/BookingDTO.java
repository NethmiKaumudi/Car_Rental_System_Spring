package lk.ijse.car_rental_system.dto;

import lombok.*;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
//@Data
@ToString
@Getter
@Setter
public class BookingDTO {
    private String bookingId;
    private String customerId;
    private String vehicleId; // List of vehicle IDs
    private String driverId; // Optional
    private String takenLocation;
    private String returnLocation;
    private LocalDate takenDate;
    private LocalDate returnDate;
    private String lossDamageAgreement;
    private Integer vehicleQty;

}
