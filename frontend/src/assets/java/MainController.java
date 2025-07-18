package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/api/hello")
    public String myMethod() {
        return "Hello, World!";
    }

    @GetMapping("/api/age")
    public int ageCalculator() {
        int age = 25;
        return age;
    }
}

