package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.entity.Booking;
import lk.ijse.car_rental_system.entity.Customer;
import lk.ijse.car_rental_system.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class BookingApprovalService {
    @Autowired
    DriverService driverService;
    @Autowired
    VehicleService vehicleService;
    @Autowired
    private BookingService bookingService;
    @Autowired
    private EmailService emailService;
    //    @Autowired
//    private JavaMailSender emailSender;
    @Autowired
    private CustomerService customerService;

//    @Transactional
//    public void approveBooking(Booking bookingData) {
//        Customer customer = customerService.getCustomerById(bookingData.getCustomerId());
//
//        if (customer != null) {
//            // Send an email to the customer
//            emailService.sendBookingApprovalEmail(customer.getCustomerEmail(), "Your booking has been approved.");
//
//            // Send an email to the customer
//        }
//        // Add the booking data to the booking table
//        bookingService.addBooking(bookingData);
//
//        // Update the vehicle table with the new quantity
//        vehicleService.updateVehicleQuantity(bookingData.getVehicleId(), bookingData.getVehicleQty());
//
//        // Check if a driver is assigned
//        if (bookingData.getDriverId() != null) {
//            // Update the driver status
//            driverService.updateDriverStatus(bookingData.getDriverId(), "BOOKED");
//        }
//    }
}
