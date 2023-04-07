package com.example.server.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="packageType")
@NoArgsConstructor
@AllArgsConstructor
public class PackageType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int typeID;
    private String typeName;
    private int quantity;



}
