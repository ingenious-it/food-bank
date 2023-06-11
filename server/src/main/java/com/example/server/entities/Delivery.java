package com.example.server.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "Delivery")
@NoArgsConstructor
@AllArgsConstructor
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int DId ;
    private String VictimNic;
    private Date DeliveryDate;
    private String DeliveryNo;
    private String DeliveryStreet;
    private String DeliveryCity;
    private String DeliveryPerson;
    private Boolean isCompleted ;

//    @OneToMany(mappedBy = "delivery", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<DeliveryPerson> deliveryPersons = new ArrayList<>();

}
