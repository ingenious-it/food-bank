//package com.example.server.entities;
//
//import com.example.server.entities.FoodDonation;
//import com.example.server.entities.FoodItem;
//import com.example.server.entities.FoodItemDonationId;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Entity
//@Table(name = "food_item_donation")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@IdClass(FoodItemDonationId.class)
//public class FoodItemDonation {
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "DonationID")
//    private FoodDonation foodDonation;
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "id")
//    private FoodItem foodItem;
//
//    private int donatedQuantity;
//}
//
