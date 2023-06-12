package com.example.server.controllers;

import com.example.server.entities.Delivery;
import com.example.server.services.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

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

    @GetMapping("/getIncompleteDeliveries")
    public ResponseEntity<List<Delivery>> getIncompleteDeliveries() {
        List<Delivery> incompleteDeliveries = deliveryService.getIncompleteDeliveries();
        return new ResponseEntity<>(incompleteDeliveries, HttpStatus.OK);
    }
    @PutMapping("/updateDeliveryStatus/{id}")
    public ResponseEntity<String> updateDeliveryStatus(@PathVariable("id") int deliveryId) {
        boolean updated = deliveryService.updateDeliveryStatus(deliveryId);
        if (updated) {
            return ResponseEntity.ok("Delivery status updated successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Delivery not found.");
        }
    }

}
