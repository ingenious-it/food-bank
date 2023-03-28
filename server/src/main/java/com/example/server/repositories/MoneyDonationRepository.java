package com.example.server.repositories;

import com.example.server.entities.MoneyDonation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MoneyDonationRepository extends JpaRepository<MoneyDonation,String>
{
    @Query("SELECT SUM(d.donationAmount) FROM MoneyDonation d")
    long getDonationAmountSum();

}
