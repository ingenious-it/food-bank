package com.example.server.entities;

import org.hibernate.annotations.NaturalId;
import jakarta.persistence.*;
@Entity
@Table(name="VictimDetails")
public class Victim {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String Nic;
    private String FirstName;
     private String LastName;
    private int PhoneNumber;
    private String No;
    private String Street;
    private String City;
    private String Description;
    private Boolean IsVerified ;

}
