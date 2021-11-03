package com.example.demo.Repository;

import com.example.demo.Model.Workout;
import org.springframework.data.repository.CrudRepository;

public interface WorkoutRepository extends CrudRepository<Workout, Long> {
    //extra repo methods here
}
