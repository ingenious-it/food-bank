package com.example.server.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="PackageTypeDetails")
@NoArgsConstructor
@AllArgsConstructor
public class PackageRequisition {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int Packageid;
    private String PackageType;
    private int RequestedQuantity;

}
