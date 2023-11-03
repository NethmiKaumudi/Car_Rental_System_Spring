package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.dto.BookingDTO;
import lk.ijse.car_rental_system.entity.Booking;
import lk.ijse.car_rental_system.repository.BookingRepo;
import lk.ijse.car_rental_system.repository.DriverRepo;
import lk.ijse.car_rental_system.repository.VehicleRepo;
import lk.ijse.car_rental_system.service.BookingService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {
    @Autowired
    ModelMapper mapper;

    @Autowired
    BookingRepo bookingRepo;
    @Autowired
    DriverRepo driverRepository;
    @Autowired
    VehicleRepo vehicleRepository; // Inject the VehicleRepository

    @Override
    public String generateNextBookingId() {
        Booking lastBooking = bookingRepo.findTopByOrderByBookingIdDesc();
        if (lastBooking != null) {
            String lastBookingId = lastBooking.getBookingId();
            // Extract the numeric part and increment it
            int lastBookingNumber = Integer.parseInt(lastBookingId.substring(1));
            String nextBookingId = "B" + String.format("%03d", lastBookingNumber + 1);
            return nextBookingId;
        } else {
            // If there are no bookings yet, start from a predefined number, e.g., B0001
            return "B001";
        }
    }


    public void addBooking(BookingDTO bookingData) {
        // Create a new Booking entity from the BookingData
        Booking booking = new Booking();

        // Map the properties from bookingData to booking entity
        booking.setBookingId(bookingData.getBookingId());
        booking.setCustomerId(bookingData.getCustomerId());
        booking.setVehicleId(bookingData.getVehicleId());
        booking.setDriverId(bookingData.getDriverId());
        booking.setTakenLocation(bookingData.getTakenLocation());
        booking.setReturnLocation(bookingData.getReturnLocation());
        booking.setTakenDate(bookingData.getTakenDate());
        booking.setReturnDate(bookingData.getReturnDate());
        booking.setLossDamageAgreement(bookingData.getLossDamageAgreement());
        booking.setVehicleQty(bookingData.getVehicleQty());

        // Save the booking entity to the database
        bookingRepo.save(booking);
    }

}
