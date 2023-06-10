package com.example.server.controllers;

import com.example.server.entities.Delivery;
import com.example.server.services.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Delivery")
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000"})
public class DeliveryController {
    private final DeliveryService deliveryService;

    @Autowired
    public DeliveryController(DeliveryService deliveryService) {
        this.deliveryService = deliveryService;
    }

    @GetMapping("/viewDelivery")
    public List<Delivery> getAllDelivery() {
        return deliveryService.getAllDelivery();
    }

    @PostMapping("/saveDelivery")
    public Delivery saveDelivery(@RequestBody Delivery delivery) {
        return deliveryService.saveDelivery(delivery);
    }
    @GetMapping("/pending-count")
    public int getPendingDeliveryCount() {
        return deliveryService.getPendingDeliveryCount();
    }
}
