package com.example.server.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="food_donation")
public class FoodDonation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String DonationID;
    private String DonationAddress;
    private Date DonationDate;
    private String NearestLocation;
//    @ManyToOne
//    @JoinColumn(name = "user_ID")


}
