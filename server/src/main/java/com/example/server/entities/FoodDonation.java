package com.example.server.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="food_donation")
public class FoodDonation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int DonationId;
    private String DonationAddress;
    private Date DonationDate;
    private String NearestLocation;
    private String SelectedOption;

    private boolean isCollected;
    private boolean isNotAvailable;
}
