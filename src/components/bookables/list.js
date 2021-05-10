import React from 'react';

import { bookables } from '../../static.json';

const List = () => {
  const group = 'Rooms';

  const bookablesInGroup = bookables.filter((b) => b.group === group);

  const bookableIndex = 1;

  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((b, i) => (
        <li key={b.id} className={i === bookableIndex ? 'selected' : null}>
          <button className="btn">{b.title}</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
