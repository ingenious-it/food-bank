package com.example.server.controllers;

import com.example.server.entities.FoodItem;
import com.example.server.services.FoodItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
@RequestMapping("/ItemDetails")
public class FoodIemController {
    @Autowired
    private FoodItemService foodItemService;
    @GetMapping("/viewAllItems")
    public List<FoodItem> getAllFoodItems()
    {
        return foodItemService.getAllItems();
    }
    @PostMapping("/saveIssued")
    public FoodItem saveIssued(@RequestBody FoodItem foodItem)
    {
        return foodItemService.saveIssued(foodItem);
    }

}
