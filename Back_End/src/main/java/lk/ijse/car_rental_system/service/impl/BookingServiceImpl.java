package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.entity.Booking;
import lk.ijse.car_rental_system.repository.BookingRepo;
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

    @Override
    public String generateNextBookingId() {
        Booking lastBooking = bookingRepo.findTopByOrderByBookingIdDesc();
        if (lastBooking != null) {
            String lastBookingId = lastBooking.getBookingId();
            // Extract the numeric part and increment it
            int lastBookingNumber = Integer.parseInt(lastBookingId.substring(1));
            String nextBookingId = "B" + String.format("%04d", lastBookingNumber + 1);
            return nextBookingId;
        } else {
            // If there are no bookings yet, start from a predefined number, e.g., B0001
            return "B001";
        }    }
}
