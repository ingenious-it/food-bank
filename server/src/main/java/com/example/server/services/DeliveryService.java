package com.example.server.services;

import com.example.server.entities.Delivery;
import com.example.server.repositories.DeliveryPersonRepository;
import com.example.server.repositories.DeliveryRepository;
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

    public List<Delivery> getIncompleteDeliveries() {
        return deliveryRepository.findByIsCompletedFalse();
    }

    public Delivery updateDeliveryCompletionStatus(int did, boolean isCompleted) {
        Optional<Delivery> optionalDelivery = deliveryRepository.findById(did);
        if (optionalDelivery.isPresent()) {
            Delivery delivery = optionalDelivery.get();
            delivery.setIsCompleted(isCompleted);
            return deliveryRepository.save(delivery);
        }
        throw new IllegalArgumentException("Delivery not found with ID: " + did);
    }


}

