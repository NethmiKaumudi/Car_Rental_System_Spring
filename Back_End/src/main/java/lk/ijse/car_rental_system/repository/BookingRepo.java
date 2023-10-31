package lk.ijse.car_rental_system.repository;

import lk.ijse.car_rental_system.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository<Booking, String> {
    Booking findTopByOrderByBookingIdDesc();

}
