import React, { useState } from 'react';
import axios from 'axios';
import '../assets/CSS/addvenue.css';

const AddVenueForm = () => {
  const [eventName, setEventName] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [totalCost, setTotalCost] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'eventName':
        setEventName(value);
        break;
      case 'venue':
        setVenue(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'totalCost':
        setTotalCost(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("JWTtoken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "http://localhost:8080/api/event/new",
        {
          eventName: eventName,
          venue: venue,
          date: new Date(date), // Converting date string to Date object
          totalCost: totalCost,
        },
        config
      );
      console.log("Response from server:", response.data);
      // Clear form after submission
      setEventName('');
      setVenue('');
      setDate('');
      setTotalCost('');
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input type="text" name="eventName" value={eventName} onChange={handleInputChange} />
      </label>
      <label>
        Venue:
        <input type="text" name="venue" value={venue} onChange={handleInputChange} />
      </label>
      <label>
        Date:
        <input type="date" name="date" value={date} onChange={handleInputChange} />
      </label>
      <label>
        Total Cost:
        <input type="number" name="totalCost" value={totalCost} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddVenueForm;
    