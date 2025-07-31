package com.example.backend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/message")
    public String getOopMessage() {
        oopPractice practice = new oopPractice();
        return practice.getMainMessage() + practice.displayMessage();
    }
}