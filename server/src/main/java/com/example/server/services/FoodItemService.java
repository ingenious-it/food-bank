package com.example.server.services;

import com.example.server.entities.FoodItem;
import com.example.server.repositories.FoodDonationRepsoitory;
import com.example.server.repositories.FoodItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public int getTotalQuantity() {
        return foodItemRepository.findAll().stream()
                .mapToInt(FoodItem::getQuantity)
                .sum();
    }


}
