package com.example.server.repositories;

import com.example.server.entities.RegisteredUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisteredUserRepository extends JpaRepository<RegisteredUser,Integer>{
    RegisteredUser findByUsername(String username);
}
