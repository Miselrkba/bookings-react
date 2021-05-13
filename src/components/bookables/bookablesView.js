import { useState, Fragment, useCallback } from 'react';

import BookablesList from './bookablesList';
import BookableDetails from './bookableDetails';

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
