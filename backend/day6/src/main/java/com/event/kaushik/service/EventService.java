package com.event.kaushik.service;

import com.event.kaushik.DTO.EventDto;

public interface EventService {
    void createEvent(EventDto eventDto);
    EventDto getEventById(int eventId);
    boolean updateEvent(int eventId, EventDto eventDto);
    boolean deleteEvent(int eventId);
}
