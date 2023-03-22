package com.example.server.entities;

import jakarta.persistence.*;

@Entity
@Table(name="packageType")
public class PackageType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int typeID;
    private String typeName;
    private int quantity;
}
