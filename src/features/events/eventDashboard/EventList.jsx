import React from 'react';
import EventListItem from './EventListItem';

export default function EventList({events}) {
  return (
    <>
      {events.map(events => (<EventListItem event={events} key={events.id}/>))}
    </>
  );
}
