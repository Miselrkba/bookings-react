import React from 'react';
import WeekPicker from './weekPicker';

const Bookings = () => {
  return (
    <main className="bookings-page">
      <p>Bookings!</p>
      <WeekPicker date={new Date()} />
    </main>
  );
};

export default Bookings;
