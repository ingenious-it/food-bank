package com.example.server.repositories;

import com.example.server.entities.RegisteredUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Repository
public interface RegisteredUserRepository extends JpaRepository<RegisteredUser,Integer>{
    RegisteredUser findByUsername(String username);
    List<RegisteredUser> findByRoleIn(List<String> roles);

    Optional<RegisteredUser> findByEmail(String email);

    Optional<RegisteredUser> findByResetPasswordToken(String resetPasswordToken);
    RegisteredUser findById(int id);
    int countByRoleIn(Collection<String> roles);

}
