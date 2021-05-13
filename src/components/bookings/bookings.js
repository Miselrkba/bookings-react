import { useReducer, useState } from 'react';
import { getWeek } from '../../utils/date-wrangler';
import BookingDetails from './bookingDetails';

import weekReducer from './weekReducer';
import BookingsGrid from './bookingsGrid';
import WeekPicker from './weekPicker';

export default function Bookings({ bookable }) {
  const [week, dispatch] = useReducer(weekReducer, new Date(), getWeek);

  const [booking, setBooking] = useState(null);

  return (
    <div className="bookings">
      <div>
        <WeekPicker dispatch={dispatch} />

        <BookingsGrid
          week={week}
          bookable={bookable}
          booking={booking}
          setBooking={setBooking}
        />
      </div>

      <BookingDetails booking={booking} bookable={bookable} />
    </div>
  );
}
