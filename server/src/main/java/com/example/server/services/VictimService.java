package com.example.server.services;
import com.example.server.entities.Victim;
import com.example.server.repositories.VictimRepository;
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
    public Victim getVictimById(int id) {
        return victimRepository.findById(id).orElse(null);
    }



}
