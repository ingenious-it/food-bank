package com.example.server.controllers;

import com.example.server.entities.RegisteredUser;
import com.example.server.loginconfigDonation.LoginResponseDonation;
import com.example.server.services.EmailSender;
import com.example.server.services.RegisteredUserService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000","http://localhost:3002" })
@RequestMapping("/RegisteredUser")
public class RegisteredUserController {
    @Autowired
    private RegisteredUserService registeredUserService;
    private final JavaMailSender mailSender;

    public RegisteredUserController(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @PostMapping("/saveUser")
    public RegisteredUser saveUserDetails(@RequestBody RegisteredUser registeredUser)
    {
        System.out.println(registeredUser);
        return registeredUserService.SaveRegisteredUser(registeredUser);

    }
    @GetMapping("/getRegisteredUser")
    public List<RegisteredUser> getRegisteredUsers()
    {
        return registeredUserService.getAllRegisteredUser();
    }
    @GetMapping("/exists/{username}")
    public ResponseEntity<Boolean> checkUsernameExists(@PathVariable String username) {
        boolean exists = registeredUserService.checkUsernameExists(username);
        return ResponseEntity.ok(exists);
    }
    @PostMapping("/login")
    public ResponseEntity<LoginResponseDonation> login(@RequestBody RegisteredUser loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword() ;
        System.out.println(loginRequest);
        LoginResponseDonation loginResponse = registeredUserService.performLogin(username, password);

        if (loginResponse.getToken() != null) {
            System.out.println(loginResponse.getToken());
            return ResponseEntity.ok(loginResponse);

        } else if(loginResponse.getToken() == null) {
            System.out.println(loginResponse.getToken());
            return ResponseEntity.ok(loginResponse);}
            else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(loginResponse);
        }
    }
    @GetMapping("/getDataSupplier")
    public List<RegisteredUser> getDetails()
    {
        return registeredUserService.getUsersWithRoles();
    }

    @PostMapping("/forgotpassword")
    public String processForgotPassword(@RequestBody Map<String, String> request) throws MessagingException, UnsupportedEncodingException {
        String email = request.get("email");
        UUID randomUUID = UUID.randomUUID();
        String token = randomUUID.toString().replaceAll("_", "");

        registeredUserService.updateResetPasswordToken(token, email);

        EmailSender emailSender = new EmailSender(mailSender);
        String resetPasswordLink = "http://localhost:3000/reset_password?token=" + token;
        String subject = "Here is your link to reset your password";
        String content = "<p>Hello,</p>" + "<p>You have requested to reset your password</p>" + "<p>Click the link below to reset your password:</p>" + "<p><b><a href=\"" + resetPasswordLink + "\">Change my Password</a></b></p>" + "<p>If you didn't request this, please ignore this email.</p>";

        emailSender.sendEmail(email, subject, content);

        return "Email sent successfully.";
    }
    @PostMapping("/resetpassword")
    public String resetPassword(@RequestBody Map<String, String> request) {
        String token = request.get("token");
        String password = request.get("password");
        RegisteredUser registeredUser = registeredUserService.getByResetPasswordToken(token);

        registeredUserService.updatePassword(password, registeredUser);

        return "you have changed the password";

    }
    @GetMapping("/getDataSupplier/{id}")
    public ResponseEntity<RegisteredUser> getDataSupplierById(@PathVariable int id) {
        RegisteredUser dataSupplier = registeredUserService.getDataSupplierById(id);
        return new ResponseEntity<>(dataSupplier, HttpStatus.OK);
    }

    @GetMapping("/data-suppliers/count")
    public int getCountOfDataSuppliers() {
        List<String> roles = Arrays.asList("both", "Datasupplier");
        return registeredUserService.getCountOfDataSuppliers(roles);
    }

    @GetMapping("/top-data-suppliers")
    public List<Map<String, Object>> getTopDataSuppliers() {
        return registeredUserService.getTopDataSuppliers(); // Change the limit as per your requirement
    }
    @GetMapping("/top-donaters")
    public List<Map<String, Object>> getTopDonors() {
        return registeredUserService.getTopDonors();
    }
}
