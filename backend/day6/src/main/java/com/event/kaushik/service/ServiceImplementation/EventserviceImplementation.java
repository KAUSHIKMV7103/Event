package com.event.kaushik.service.ServiceImplementation;

import org.springframework.stereotype.Service;

import com.event.kaushik.DTO.EventDto;
import com.event.kaushik.Entity.Event;
import com.event.kaushik.repository.EventRepo;
import com.event.kaushik.service.EventService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EventserviceImplementation implements EventService {
    private final EventRepo eventRepo;

    @Override
    public void createEvent(EventDto eventDto) {
        Event event = new Event();
        event.setEventName(eventDto.getEventName());
        event.setVenue(eventDto.getVenue());
        event.setDate(eventDto.getDate());
        event.setTotalCost(eventDto.getTotalCost());
        eventRepo.save(event);
    }

    @Override
    public EventDto getEventById(int eventId) {
        Event event = eventRepo.findById(eventId).orElse(null);
        if (event != null) {
            return new EventDto(event.getId(), event.getEventName(), event.getVenue(), event.getDate(), event.getTotalCost());
        } else {
            return null;
        }
    }

    @Override
    public boolean updateEvent(int eventId, EventDto eventDto) {
        Event existingEvent = eventRepo.findById(eventId).orElse(null);
        if (existingEvent != null) {
            existingEvent.setEventName(eventDto.getEventName());
            existingEvent.setVenue(eventDto.getVenue());
            existingEvent.setDate(eventDto.getDate());
            existingEvent.setTotalCost(eventDto.getTotalCost());
            eventRepo.save(existingEvent);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean deleteEvent(int eventId) {
        if (eventRepo.existsById(eventId)) {
            eventRepo.deleteById(eventId);
            return true;
        } else {
            return false;
        }
    }
}
