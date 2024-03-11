package com.event.kaushik.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.kaushik.DTO.EventDto;
import com.event.kaushik.service.EventService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/event")
@CrossOrigin(origins = "http://localhost:5173",allowedHeaders = "*")
public class EventController {
    @Autowired
    EventService eventService;

    // POST Mapping to create a new event
    @PostMapping("/new")
    public ResponseEntity<String> createEvent(@RequestBody EventDto eventDto) {
        eventService.createEvent(eventDto);
        return ResponseEntity.ok().body("Event created successfully");
    }

    // GET Mapping to retrieve an event by its ID
    @GetMapping("/{eventId}")
    public ResponseEntity<EventDto> getEventById(@PathVariable int eventId) {
        EventDto eventDto = eventService.getEventById(eventId);
        if (eventDto != null) {
            return ResponseEntity.ok().body(eventDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // PUT Mapping to update an existing event
    @PutMapping("/{eventId}")
    public ResponseEntity<String> updateEvent(@PathVariable int eventId, @RequestBody EventDto eventDto) {
        boolean updated = eventService.updateEvent(eventId, eventDto);
        if (updated) {
            return ResponseEntity.ok().body("Event updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE Mapping to delete an existing event
    @DeleteMapping("/{eventId}")
    public ResponseEntity<String> deleteEvent(@PathVariable int eventId) {
        boolean deleted = eventService.deleteEvent(eventId);
        if (deleted) {
            return ResponseEntity.ok().body("Event deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
