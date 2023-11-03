package lk.ijse.car_rental_system.service;

//import lk.ijse.car_rental_system.dto.PasswordResetForm;
import lk.ijse.car_rental_system.dto.UserDTO;
import lk.ijse.car_rental_system.entity.User;

public interface UserService {
    void addUser(UserDTO dto);

//    UserDTO login(UserDTO userDTO);

    public User findByEmail(String email);

//    public boolean resetPassword(PasswordResetForm form);

    //    public User findUserByUserName(String userName);
    public String findPasswordByUsername(String userName);

    public String findUserRoleByUsername(String userName);

    public boolean updatePassword(String email, String newPassword);

//    public List<UserDTO> get();
//
//    public void updateCustomer(UserDTO dto);

}
