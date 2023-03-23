package com.example.server.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name="food_donation")
@Data
public class FoodDonation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int DonationID;
    private String DonationAddress;
    private Date DonationDate;
    private String NearestLocation;
    private String Option;
}
