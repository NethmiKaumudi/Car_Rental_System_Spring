package lk.ijse.car_rental_system.service;

import lk.ijse.car_rental_system.dto.BookingDTO;
import lk.ijse.car_rental_system.entity.Booking;

public interface BookingService {
    String generateNextBookingId();
    public void addBooking(BookingDTO booking) ;
}
