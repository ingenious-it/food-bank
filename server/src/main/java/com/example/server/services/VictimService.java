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

    public Victim updateVictim(Long id, Victim updatedVictim) {
        Optional<Victim> optionalVictim = victimRepository.findById(id);
        if (optionalVictim.isPresent()) {
            Victim victim = optionalVictim.get();
            victim.setIsDeliverySelected(updatedVictim.getIsDeliverySelected());
            return victimRepository.save(victim);
        } else {
            return null;
        }
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
//    public Victim updateTheVictim(Long id, Boolean isVerified) {
//        Victim victim = victimRepository.findById(id).orElseThrow(EntityNotFoundException::new);
//        victim.setIsVerified(isVerified);
//        return victimRepository.save(victim);
//    }
//    public Victim updateTheRejectedVictim(Long id, Boolean isRejected) {
//        Victim victim = victimRepository.findById(id).orElseThrow(EntityNotFoundException::new);
//        victim.setIsRejected(isRejected);
//        return victimRepository.save(victim);
//    }


    public List<Victim> getAllUnverifiedVictims() //All the Unverified Victims
    {
       return victimRepository.findByIsVerifiedFalse();

    }

    public List<Victim> getAcceptedandNeedtobeSelectDeliveryVictim() //nuska
    {
        return victimRepository.findByIsAcceptedTrueAndIsDeliverySelectedFalse();
    }
    public List<Victim> getAcceptedAndSelectedtoDelivery()//nuska
    {
        return victimRepository.findByIsAcceptedTrueAndIsDeliverySelectedTrueAndIsDeliveryPersonSelectFalse();
    }
    public List<Victim> getAcceptedVictims()
    {
        return victimRepository.findByIsVerifiedTrueAndIsAcceptedTrue();
    }
    public List<Victim> getRejectedVictims()

    {
        return victimRepository.findByIsVerifiedTrueAndIsAcceptedFalse();
    }
    public Victim updateAcceptanceStatus(Long id, Boolean Victimstatus,Boolean AcceptenceStatus) {
        Victim victim = victimRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        victim.setIsVerified(Victimstatus);
        victim.setIsAccepted(AcceptenceStatus);
        return victimRepository.save(victim);
    }
    public Victim updateVictimRejected(Long id, Boolean Victimstatus,Boolean AcceptenceStatus) {
        Victim victim = victimRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        victim.setIsVerified(Victimstatus);
        victim.setIsAccepted(AcceptenceStatus);
        return victimRepository.save(victim);
    }

    public Victim updateTobeDeliverStatusStatus(Long id, Boolean status) { //nuska
        Victim victim = victimRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        victim.setIsDeliverySelected(status);
        return victimRepository.save(victim);
    }
    public Victim updateIsDeliveryPersonSelect(Long id, Boolean Victimstatus,Boolean idDeliveryselectStatus) {
        Victim victim = victimRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        victim.setIsVerified(Victimstatus);
        victim.setIsDeliveryPersonSelect(idDeliveryselectStatus);
        return victimRepository.save(victim);
    }
    public long getPendingVictimCount() {
        return victimRepository.countByIsVerifiedFalse();
    }



    public List<Victim> getAllVictimDetails() {
        return victimRepository.findAll();
    }

    public Victim getVictimById(Long id) {
        return victimRepository.findById(id).orElse(null);
    }
}
