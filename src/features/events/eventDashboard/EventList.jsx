import React from 'react';
import EventListItem from './EventListItem';

export default function EventList({events, selectEvent, deleteEvent}) {
  return (
    <>
      {events.map(events => (<EventListItem event={events} key={events.id} selectEvent={selectEvent} deleteEvent={deleteEvent}/>))}
    </>
  );
}
