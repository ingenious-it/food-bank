package com.example.server.services;

import com.example.server.entities.Delivery;
import com.example.server.entities.Victim;
import com.example.server.repositories.DeliveryPersonRepository;
import com.example.server.repositories.DeliveryRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;
import java.util.Optional;

@Service
public class DeliveryService {
private final DeliveryRepository deliveryRepository;
@Autowired
public DeliveryService(DeliveryRepository deliveryRepository) {
    this.deliveryRepository = deliveryRepository;
}

    public Delivery saveDelivery(Delivery delivery) {
        return deliveryRepository.save(delivery);
    }

    public List<Delivery> getAllDelivery() {
        return deliveryRepository.findAll();
    }
    public int getPendingDeliveryCount() {
        return deliveryRepository.countByIsCompletedFalse();
    }

    public List<Delivery> getIncompleteDeliveries() {
        return deliveryRepository.findByIsCompletedFalse();
    }




    public boolean updateDeliveryStatus(int deliveryId) {
        Delivery delivery = deliveryRepository.findById(deliveryId);
        if (delivery != null) {
            delivery.setIsCompleted(true);
            deliveryRepository.save(delivery);
            return true;
        }
        return false;
    }


    }
//    public Delivery updateDeliveryStatus(int id, Boolean deliveryStatus) {
//        Delivery delivery = deliveryRepository.findById(id).orElseThrow(EntityNotFoundException::new);
//        delivery.setIsCompleted(deliveryStatus);
//        return deliveryRepository.save(delivery);
//    }
//public Delivery updateDeliveryStatus(int deliveryId, boolean isCompleted) {
//    Delivery delivery = deliveryRepository.findById(deliveryId)
//            .orElseThrow(() -> new IllegalArgumentException("Invalid delivery ID: " + deliveryId));
//
//    delivery.setIsCompleted(isCompleted);
//    return deliveryRepository.save(delivery);
//}




