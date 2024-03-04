package com.event.kaushik.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.kaushik.DTO.UserDto;
import com.event.kaushik.service.UserService;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@AllArgsConstructor
@RequestMapping("/user")

public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/new")
    public void createUser(@RequestBody UserDto userDto){
        userService.createEvent(userDto);
    }
    
}
