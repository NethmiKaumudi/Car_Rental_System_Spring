package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bookings")
@CrossOrigin
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @GetMapping("/generate-next-booking-id")
    public String generateNextBookingId() {
        String nextBookingId = bookingService.generateNextBookingId();
        return nextBookingId;
    }


    }
