import { useQuery } from 'react-query';

import { shortISO } from '../../utils/date-wrangler';
import { useBookingsParams } from './bookingsHooks';

import BookablesList from '../bookables/bookablesList';
import Bookings from './bookings';
import PageSpinner from '../ui/pageSpinner';
import getData from '../../utils/api';

export default function BookingsPage() {
  const { data: bookables = [], status, error } = useQuery('bookables', () =>
    getData('http://localhost:3001/bookables')
  );

  const { date, bookableId } = useBookingsParams();

  const bookable = bookables.find((b) => b.id === bookableId) || bookables[0];

  function getUrl(id) {
    const root = `/bookings?bookableId=${id}`;
    return date ? `${root}&date=${shortISO(date)}` : root;
  }

  if (status === 'error') {
    return <p>{error.message}</p>;
  }

  if (status === 'loading') {
    return <PageSpinner />;
  }

  return (
    <main className="bookings-page">
      <BookablesList
        bookable={bookable}
        bookables={bookables}
        getUrl={getUrl}
      />
      <Bookings bookable={bookable} />
    </main>
  );
}
