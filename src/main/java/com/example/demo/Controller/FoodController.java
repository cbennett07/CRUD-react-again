package com.example.demo.Controller;

import com.example.demo.Model.Food;
import com.example.demo.Repository.FoodRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin
public class FoodController {
    private final FoodRepository repository;

    public FoodController(FoodRepository repository){this.repository = repository;}

    //CREATE
    @PostMapping("/food")
    public Food addFood(@RequestBody Food newFood){return this.repository.save(newFood);}

    //READ
    @GetMapping("/food/{id}")
    public Optional<Food> getFood(@PathVariable Long id){return this.repository.findById(id);}

    //UPDATE
    @PatchMapping("/food/{id}")
    public Food updateFood(@PathVariable Long id, @RequestBody Map<String, Object> newFood){
        Food oldFood = this.repository.findById(id).get();
        newFood.forEach((key, value)-> {
            switch (key) {
                case "name":
                    oldFood.setName((String) value);
                    break;
                case "calories":
                    oldFood.setCalories((Integer) value);
                    break;
                case "carb":
                    oldFood.setCarb((Integer) value);
                    break;
                case "fat":
                    oldFood.setFat((Integer) value);
                    break;
                case "protein":
                    oldFood.setProtein((Integer) value);
                    break;
            }
        });

        return this.repository.save(oldFood);
    }

    //DELETE
    @DeleteMapping("/food/{id}")
    public void deleteFood(@PathVariable Long id){this.repository.deleteById(id);}

    //LIST
    @GetMapping("/food")
    public Iterable<Food> listFood(){return this.repository.findAll();}

}


