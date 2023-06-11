package com.example.server.services;

import com.example.server.entities.FoodItem;
import com.example.server.repositories.FoodDonationRepsoitory;
import com.example.server.repositories.FoodItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class FoodItemService {
    @Autowired private FoodItemRepository foodItemRepository;
    public List<FoodItem> getAllItems()
    {
        return foodItemRepository.findAll();
    }
    public FoodItem saveIssued(FoodItem foodItem)
    {
        return foodItemRepository.save(foodItem);
    }

    public FoodItem updateQuantityById(int id, int newQuantity) {
        Optional<FoodItem> optionalFoodItem = foodItemRepository.findById(id);

        if (optionalFoodItem.isPresent()) {
            FoodItem foodItem = optionalFoodItem.get();
            foodItem.setQuantity(newQuantity);
            return foodItemRepository.save(foodItem);
        } else {
            throw new NoSuchElementException("FoodItem with ID " + id + " not found");
        }
    }

    public int getQuantityById(int id) {
        Optional<FoodItem> optionalFoodItem = foodItemRepository.findById(id);

        if (optionalFoodItem.isPresent()) {
            FoodItem foodItem = optionalFoodItem.get();
            return foodItem.getQuantity();
        } else {
            throw new NoSuchElementException("FoodItem with ID " + id + " not found");
        }
    }


}
