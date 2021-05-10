import React from 'react';

import { users } from '../../static.json';

const Picker = () => {
  return (
    <select>
      {users.map((u) => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
};

export default Picker;
