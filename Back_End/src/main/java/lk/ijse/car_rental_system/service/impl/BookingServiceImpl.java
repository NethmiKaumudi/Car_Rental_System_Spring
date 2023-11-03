package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.entity.Booking;
import lk.ijse.car_rental_system.repository.BookingRepo;
import lk.ijse.car_rental_system.repository.DriverRepo;
import lk.ijse.car_rental_system.repository.VehicleRepo;
import lk.ijse.car_rental_system.service.BookingService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

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
            int lastBookingNumber = Integer.parseInt(lastBookingId.substring(1));
            String nextBookingId = "B" + String.format("%03d", lastBookingNumber + 1);
            return nextBookingId;
        } else {

            return "B001";
        }
    }

    public Booking addBooking(Booking booking) {
        booking.setBookingId(booking.getBookingId());
        booking.setCustomerId(booking.getCustomerId());
        booking.setVehicleId(booking.getVehicleId()); // Set the vehicle ID
        booking.setDriverId(booking.getDriverId());
        booking.setTakenLocation(booking.getReturnLocation());
        booking.setReturnLocation(booking.getTakenLocation());
        booking.setTakenDate(booking.getTakenDate());
        booking.setReturnDate(booking.getReturnDate());
        booking.setLossDamageAgreement(booking.getLossDamageAgreement());
        booking.setVehicleQty(booking.getVehicleQty());
        return bookingRepo.save(booking);
    }

    public void updateVehicleQuantity(String vehicleId, int newQuantity) {
        vehicleRepository.updateQuantity(vehicleId, newQuantity);
    }

    public void updateDriverStatus(String driverId, String newStatus) {
        driverRepository.updateStatus(driverId, newStatus);
    }
    public List<Booking> getAllBookings() {
        return bookingRepo.findAll();
    }
}

