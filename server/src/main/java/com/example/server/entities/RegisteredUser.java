package com.example.server.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.jdbc.core.SqlReturnType;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "registered_user")
public class RegisteredUser {
    @Id
    private String userId;
    private String firstName;
    private String lastName;
    private String password;
    private String phoneNumber;
    private String email;
    private long points;
    private Boolean donatorFlag;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<MoneyDonation> donations = new HashSet<>();

}
