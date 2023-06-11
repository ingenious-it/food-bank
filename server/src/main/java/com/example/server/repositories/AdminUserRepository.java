package com.example.server.repositories;

import com.example.server.entities.AdminUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface AdminUserRepository extends JpaRepository<AdminUser,String>{

        }
