package com.example.server.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="DeliveryPerson Details")
@NoArgsConstructor
@AllArgsConstructor
public class DeliveryPerson {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int DeliveryPersonId;
    private String DeliveryPersonName;
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "did", referencedColumnName = "DId")
//    private Delivery delivery;


}
