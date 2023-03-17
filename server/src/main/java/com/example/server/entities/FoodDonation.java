package com.example.server.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@Table(name="food_donation")
@NoArgsConstructor
@AllArgsConstructor  // automatic constructors
public class FoodDonation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int DonationID;

    private String DonationAddress;
    private Date DonationDate;
    private String NearestLocation;
//    @ManyToOne
//    @JoinColumn(name = "user_ID")


}
