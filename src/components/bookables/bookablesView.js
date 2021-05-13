import { useState, Fragment, useCallback } from 'react';

import BookableDetails from './bookableDetails';
import BookablesList from './bookablesList';

export default function BookablesView() {
  const [bookable, setBookable] = useState();

  const updateBookable = useCallback((selected) => {
    if (selected) {
      selected.lastShow = Date.now();
      setBookable(selected);
    }
  }, []);

  return (
    <Fragment>
      <BookablesList bookable={bookable} setBookable={updateBookable} />
      <BookableDetails bookable={bookable} />
    </Fragment>
  );
}
