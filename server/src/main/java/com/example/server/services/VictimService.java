package com.example.server.services;

import java.util.List;
import java.util.Optional;

import com.example.server.entities.Victim;
import com.example.server.repositories.VictimRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class VictimService {
    @Autowired
    private VictimRepository victimRepository ;
    public Victim saveVictimDetails(Victim victim){

        return victimRepository.save(victim);
    }

   public List<Victim> getAllVictimDetails() {
        return victimRepository.findAll();
    }
    public Victim getVictimById(Long id) {

        return victimRepository.findById(id).orElse(null);
    }

    public List<Victim> getAllVictims() {
        return victimRepository.findAll();
    }

    public List<Victim> getAllVerifiedVictims() {
      return victimRepository.findByIsVerifiedTrueAndIsDeliveredFalse();
  }


  public List<Victim> showAllVerifiedVictim() { //View Verified Victims only Don't care about Delivery
        return victimRepository.findByIsVerifiedTrue();
  }

  public List<Victim> showAllUnverifiedVictim() //View UnVerified Victims only Don't care about Delivery
  {
      return victimRepository.findByIsVerifiedFalse();
  }



    public Victim updateVictim(Long id, Victim updatedVictim) {
        Optional<Victim> optionalVictim = victimRepository.findById(id);
        if (optionalVictim.isPresent()) {
            Victim victim = optionalVictim.get();
            victim.setIsDelivered(updatedVictim.getIsDelivered());
            return victimRepository.save(victim);
        } else {
            return null;
        }
    }


    public List<Victim> getAllToDeliveyVictims() {

        return victimRepository.findByIsVerifiedTrueAndIsDeliveredTrue();
    }
    public List<Victim> getRejectedVictims()
    {

        return victimRepository.findByIsVerifiedTrueAndIsRejectedTrue();
    }

    public List<Victim> getAcceptedVictims()
    {

        return victimRepository.findByIsVerifiedTrueAndIsRejectedFalse();
    }

//    public Victim updateVerifyVictim(Long id, Victim updatedVictim) {
//        Optional<Victim> optionalVictim = victimRepository.findById(id);
//        if (optionalVictim.isPresent()) {
//            Victim victim = optionalVictim.get();
//            victim.setIsDelivered(updatedVictim.getIsVerified());
//            return victimRepository.save(victim);
//        } else {
//            return null;
//        }
//    }
    public Victim updateTheVictim(Long id, Boolean isVerified) {
        Victim victim = victimRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        victim.setIsVerified(isVerified);
        return victimRepository.save(victim);
    }



}
