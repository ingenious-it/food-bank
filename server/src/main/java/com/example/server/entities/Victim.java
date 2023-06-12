package com.example.server.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NaturalId;
import jakarta.persistence.*;
@Entity
@Data
@Table(name="VictimDetails")
@NoArgsConstructor
@AllArgsConstructor
public class Victim {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String Nic;
    private String FirstName;
    private String LastName;
    private String PhoneNumber;
    private String No;
    private String Street;
    private String City;
    private String Description;
    private String PackageType;
    private Boolean isVerified;
    private Boolean isAccepted;
    private Boolean isDeliverySelected;


    private Boolean isDeliveryPersonSelect = false; // Set default value to false
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "donaterId")
    private RegisteredUser user;




}
