import React, { Component } from 'react';

interface Event {
    id: number;
    title: string;
    date: string;
    targetGroup: string;
}

interface CalendarState {
    events: Event[];
    filteredEvents: Event[];
    targetGroupFilter: string;
}

class Calendar extends Component<{}, CalendarState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            events: [],
            filteredEvents: [],
            targetGroupFilter: ''
        };
    }

    componentDidMount() {
        this.fetchEvents();
    }

    fetchEvents = () => {
        // Fetch events from the server or service
        // For now, we will use a static array
        const events: Event[] = [
            { id: 1, title: 'Math Class', date: '2023-10-01', targetGroup: 'Students' },
            { id: 2, title: 'Science Fair', date: '2023-10-05', targetGroup: 'All' },
            // Add more events as needed
        ];
        this.setState({ events, filteredEvents: events });
    };

    addEvent = (event: Event) => {
        this.setState(prevState => ({
            events: [...prevState.events, event],
            filteredEvents: [...prevState.filteredEvents, event]
        }));
    };

    deleteEvent = (id: number) => {
        this.setState(prevState => ({
            events: prevState.events.filter(event => event.id !== id),
            filteredEvents: prevState.filteredEvents.filter(event => event.id !== id)
        }));
    };

    updateEvent = (updatedEvent: Event) => {
        this.setState(prevState => ({
            events: prevState.events.map(event => 
                event.id === updatedEvent.id ? updatedEvent : event
            ),
            filteredEvents: prevState.filteredEvents.map(event => 
                event.id === updatedEvent.id ? updatedEvent : event
            )
        }));
    };

    filterEvents = (targetGroup: string) => {
        this.setState({
            targetGroupFilter: targetGroup,
            filteredEvents: this.state.events.filter(event => 
                event.targetGroup === targetGroup || targetGroup === ''
            )
        });
    };

    render() {
        return (
            <div>
                <h2>Event Calendar</h2>
                <div>
                    {/* Event filtering UI can be added here */}
                </div>
                <ul>
                    {this.state.filteredEvents.map(event => (
                        <li key={event.id}>
                            {event.title} - {event.date}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Calendar;