package com.example.server.repositories;

import com.example.server.entities.Victim;
import jakarta.persistence.Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


import java.util.List;

@Repository
public interface VictimRepository extends JpaRepository<Victim ,Long> {
    List<Victim> findByIsVerifiedFalse();
    List<Victim> findByIsVerifiedTrue();
    List<Victim> findByIsVerifiedTrueAndIsDeliveredFalse();
    List<Victim> findByIsVerifiedTrueAndIsDeliveredTrue();
    List<Victim> findByIsVerifiedTrueAndIsRejectedTrue();
   // This method uses Spring Data JPA's query creation mechanism to automatically generate a query to retrieve all Victim entities where the isVerified property is set to true.

}
