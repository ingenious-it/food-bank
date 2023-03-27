package com.example.server.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data

@Table(name = "money_donation")
public class MoneyDonation {
    @Id
   private String donationID;
   private long donationAmount;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private RegisteredUser user;
    private String dateAndTime;


}
