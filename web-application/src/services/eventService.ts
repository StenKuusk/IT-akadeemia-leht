import { Event } from '../models/Event';

const events: Event[] = [];

export const fetchEvents = (): Event[] => {
    return events;
};

export const addEvent = (event: Event): void => {
    events.push(event);
};

export const updateEvent = (updatedEvent: Event): void => {
    const index = events.findIndex(event => event.id === updatedEvent.id);
    if (index !== -1) {
        events[index] = updatedEvent;
    }
};

export const deleteEvent = (eventId: string): void => {
    const index = events.findIndex(event => event.id === eventId);
    if (index !== -1) {
        events.splice(index, 1);
    }
};