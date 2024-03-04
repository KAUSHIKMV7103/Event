package com.event.kaushik.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.kaushik.DTO.EventDto;
import com.event.kaushik.service.EventService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@AllArgsConstructor
@RequestMapping("/event")
public class EventController {
    @Autowired
    EventService eventService;

    @GetMapping("/new")
    public void createEvent(@RequestBody EventDto eventDto){
        eventService.createEvent(eventDto);
    }
    
    
}
