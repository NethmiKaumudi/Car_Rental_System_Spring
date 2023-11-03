package lk.ijse.car_rental_system.service;

import lk.ijse.car_rental_system.entity.Booking;

import java.util.List;

public interface BookingService {
    String generateNextBookingId();

    //    public void addBooking(BookingDTO booking) ;
    Booking addBooking(Booking booking);

    void updateVehicleQuantity(String vehicleId, int newQuantity);

    void updateDriverStatus(String driverId, String newStatus);
    public List<Booking> getAllBookings() ;
}
