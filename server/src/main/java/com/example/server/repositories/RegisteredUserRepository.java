package com.example.server.repositories;

import com.example.server.entities.RegisteredUser;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Map;

@Repository
public interface RegisteredUserRepository extends JpaRepository<RegisteredUser,Integer>{
    RegisteredUser findByUsername(String username);
    List<RegisteredUser> findByRoleIn(List<String> roles);

    Optional<RegisteredUser> findByEmail(String email);

    Optional<RegisteredUser> findByResetPasswordToken(String resetPasswordToken);
    RegisteredUser findById(int id);
    int countByRoleIn(Collection<String> roles);

    @Query("SELECT CONCAT(u.firstName, ' ', u.lastName) as name, u.dataSupplierPoints as points FROM RegisteredUser u ORDER BY u.dataSupplierPoints DESC")
    List<Map<String, Object>> findTopDataSuppliers(Pageable pageable);
        @Query("SELECT CONCAT(u.firstName, ' ', u.lastName) as name, u.donaterPoints as points FROM RegisteredUser u ORDER BY u.donaterPoints DESC")
        List<Map<String, Object>> findTopDonors(Pageable pageable);


}
