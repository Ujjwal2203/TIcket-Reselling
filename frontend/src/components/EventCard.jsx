// src/components/EventCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p className="text-gray-600">Date: {event.date}</p>
      <Link to={`/event/${event._id}`} className="mt-2 inline-block text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default EventCard;