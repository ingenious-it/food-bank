package com.example.server.controllers;

import com.example.server.entities.FoodItem;
import com.example.server.repositories.FoodItemRepository;
import com.example.server.services.FoodItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
@RequestMapping("/ItemDetails")
public class FoodIemController {
    @Autowired
    private FoodItemService foodItemService;
    private FoodItemRepository foodItemRepository;

    @GetMapping("/viewAllItems")
    public List<FoodItem> getAllFoodItems()
    {
        return foodItemService.getAllItems();
    }
    @PostMapping("/saveIssued")
//    public Object saveIssued(@RequestBody Object foodItem)
//    {
//        System.out.println(foodItem);
//        return foodItem;
//
////        return foodItemService.saveIssued(foodItem);
//    }
    public ResponseEntity<String> updateInputValue(@RequestBody List<Map<String, Integer>> inputData) {
        for (Map<String, Integer> item : inputData) {
            int id = item.get("id");
            int inputValue = item.get("inputValue");

            Optional<FoodItem> optionalFoodItem = foodItemRepository.findById(id);
            if (optionalFoodItem.isPresent()) {
                FoodItem foodItem = optionalFoodItem.get();
                int quantity = foodItem.getQuantity();
                foodItem.setQuantity(inputValue + quantity);
                foodItemRepository.save(foodItem);
            }
        }

        return ResponseEntity.ok("Input values updated successfully");
    }
    @GetMapping("/total-quantity")
    public int getTotalQuantity() {
        return foodItemService.getTotalQuantity();
    }

}
