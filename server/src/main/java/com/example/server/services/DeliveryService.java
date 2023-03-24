package com.example.server.services;

import com.example.server.entities.Delivery;
import com.example.server.repositories.DeliveryPersonRepository;
import com.example.server.repositories.DeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;

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

}

