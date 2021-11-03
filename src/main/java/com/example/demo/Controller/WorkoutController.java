package com.example.demo.Controller;

import com.example.demo.Model.Workout;
import com.example.demo.Repository.WorkoutRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin
public class WorkoutController {
    private final WorkoutRepository repository;

    public WorkoutController(WorkoutRepository repository){this.repository=repository;}

    //CREATE
    @PostMapping("/workout")
    public Workout addWorkout(@RequestBody Workout newWorkout){return this.repository.save(newWorkout);}

    //READ
    @GetMapping("/workout/{id}")
    public Optional<Workout> getWorkout(@RequestBody Long id){return this.repository.findById(id);}

    //UPDATE
    @PatchMapping("/workout/{id}")
    public Workout updateWorkout(@PathVariable Long id, @RequestBody Map<String, Object> newWorkout){
        Workout oldWorkout = this.repository.findById(id).get();
        newWorkout.forEach((key, value)-> {
            switch (key) {
                case "name":
                    oldWorkout.setName((String) value);
                    break;
                case "type":
                    oldWorkout.setType((String) value);
                    break;
                case "duration":
                    oldWorkout.setDuration((Integer) value);
                    break;
                case "caloriesEx":
                    oldWorkout.setCaloriesEx((Integer) value);
                    break;
            }
        });
        return this.repository.save(oldWorkout);
    }

    //DELETE
    @DeleteMapping("/workout/{id}")
    public void deleteWorkout(@PathVariable Long id){this.repository.deleteById(id);}

    //LIST
    @GetMapping("/workout")
    public Iterable<Workout> listWorkouts(){return this.repository.findAll();}
}
