import { useState } from 'react';

import BookablesList from '../bookables/bookablesList';
import Bookings from './bookings';

export default function BookingsPage() {
  const [bookable, setBookable] = useState(null);

  return (
    <main className="bookings-page">
      <BookablesList bookable={bookable} setBookable={setBookable} />
      <Bookings bookable={bookable} />
    </main>
  );
}
