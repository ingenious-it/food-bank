package com.example.server.controllers;

import com.example.server.entities.DeliveryPerson;
import com.example.server.services.DeliveryPersonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/DeliveryPerson")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})

public class DeliveryPersonController {
    private final DeliveryPersonService deliveryPersonService;

    @Autowired
    public DeliveryPersonController(DeliveryPersonService deliveryPersonService) {
        this.deliveryPersonService = deliveryPersonService;
    }

    @GetMapping("/viewDeliveryPerson")
    public List<DeliveryPerson> getAllDeliveryPerson()
    {
        return deliveryPersonService.getAllDeliveryPerson();
    }

    @PostMapping("/saveDeliveryPerson")
    public DeliveryPerson saveDeliveryPerson(@RequestBody DeliveryPerson deliveryPerson) {
        return deliveryPersonService.saveDeliveryPerson(deliveryPerson);
    }

     //DELETE request to remove a DeliveryPerson by ID
    @DeleteMapping("/removeDeliveryPerson/{id}")
    public ResponseEntity<HttpStatus> removeDeliveryPerson(@PathVariable int id) {
        deliveryPersonService.removeDeliveryPerson(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.OK);
    }
}
