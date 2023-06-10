package com.example.server.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="Data_Supplier_Details")
@NoArgsConstructor
@AllArgsConstructor
public class DataSupplier {

    @Id
    @Column(name="Data_Supplier_ID")
    @GeneratedValue

    private int id;
    private String name;
    private int phoneNumber;
    private String email;
    private String description;

}

