package com.example.demo.Controller;

import ch.qos.logback.classic.pattern.DateConverter;
import com.example.demo.Repository.FoodRepository;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;

import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class FoodTest {

    @Autowired
    FoodRepository repository;

    @Autowired
    MockMvc mvc;

    @Test
    @Transactional
    @Rollback
    void createFoodTest() throws Exception{
        MockHttpServletRequestBuilder request = post("/food")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\n" +
                        "    \"name\": \"Baked Potato\",\n" +
                        "    \"calories\": 705,\n" +
                        "    \"fat\": 100,\n" +
                        "    \"carb\": 550,\n" +
                        "    \"protein\": 55\n" +
                        "}");
        this.mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("Baked Potato")));
    }

}
