package com.example.demo.Repository;

import com.example.demo.Model.Food;
import org.springframework.data.repository.CrudRepository;

public interface FoodRepository extends CrudRepository<Food, Long> {
    //extra repo methods here
}
