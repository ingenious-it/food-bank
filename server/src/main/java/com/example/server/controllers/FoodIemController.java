package com.example.server.controllers;

import com.example.server.entities.FoodItem;
import com.example.server.services.FoodItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/ItemDetails")
public class FoodIemController {
    @Autowired
    private FoodItemService foodItemService;
    @GetMapping
    public List<FoodItem> getAllFoodItems()
    {
        return foodItemService.getAllItems();
    }

}
