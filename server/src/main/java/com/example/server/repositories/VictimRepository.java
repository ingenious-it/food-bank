package com.example.server.repositories;

import com.example.server.entities.Victim;
import jakarta.persistence.Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


import java.util.List;

@Repository
public interface VictimRepository extends JpaRepository<Victim ,Long> {
    List<Victim> findByIsVerifiedFalse(); //All Unverified Victims
    List<Victim> findByIsAcceptedTrueAndIsDeliverySelectedFalse();
    List<Victim> findByIsAcceptedTrueAndIsDeliverySelectedTrue();
    List<Victim> findByIsAcceptedTrueAndIsDeliverySelectedTrueAndIsDeliveryPersonSelectFalse();

    List<Victim> findByIsVerifiedTrueAndIsAcceptedTrue();
    List<Victim> findByIsVerifiedTrueAndIsAcceptedFalse();
}
