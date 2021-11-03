package com.example.demo.Controller;

import com.example.demo.Repository.WorkoutRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;


import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc

public class WorkoutTest {

    @Autowired
    WorkoutRepository repository;

    @Autowired
    MockMvc mvc;

    @Test
    @Transactional
    @Rollback
    void createWorkout() throws Exception{
        MockHttpServletRequestBuilder request = post("/workout")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\n" +
                        "    \"id\": 3,\n" +
                        "    \"name\": \"running\",\n" +
                        "    \"type\": \"cardio\",\n" +
                        "    \"duration\": 30,\n" +
                        "    \"caloriesEx\": 400\n" +
                        "}");
        this.mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("running")));

    }

}
