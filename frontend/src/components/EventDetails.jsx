// src/components/EventDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(`http://localhost:5000/api/events/${id}`);
      const data = await response.json();
      setEvent(data);
    };

    fetchEvent();
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold">{event.title}</h2>
      <p className="text-gray-600">Date: {event.date}</p>
      <p className="mt-4">Description: {event.description}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Book Now</button>
    </div>
  );
};

export default EventDetails;