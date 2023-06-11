package com.example.server.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="AdminUser")
@NoArgsConstructor
@AllArgsConstructor
public class AdminUser {
    @Id
    private String userName;
    private String password;
    private String userRole;
}
