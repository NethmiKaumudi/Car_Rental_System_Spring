package lk.ijse.car_rental_system.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Booking {
    @Id
    @Column(name = "booking_id", columnDefinition = "VARCHAR(64)")
    private String bookingId;

    @Column(name = "customer_id")
    private String customerId;

    @ElementCollection
    @CollectionTable(name = "booking_vehicles", joinColumns = @JoinColumn(name = "booking_id"))
    @Column(name = "vehicle_id")
    private List<String> vehicleIds;

    @Column(name = "driver_id")
    private String driverId; // Can be null

    @Column(name = "taken_location")
    private String takenLocation;

    @Column(name = "return_location")
    private String returnLocation;

    @Column(name = "taken_date")
    private LocalDate takenDate;

    @Column(name = "return_date")
    private LocalDate returnDate;

    @Column(name = "loss_damage_agreement")
    private String lossDamageAgreement;
}
