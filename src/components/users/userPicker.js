import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../ui/spinner';
import getData from '../../utils/api';

export default function UserPicker() {
  const [user, setUser] = useState(null);

  const url = 'http://localhost:3001/users';

  const { data: users = [], status } = useQuery('users', () => getData(url));

  useEffect(() => {
    setUser(users[0]);
  }, [users, setUser]);

  function handleSelect(e) {
    const selectedID = parseInt(e.target.value, 10);
    const selectedUser = users.find((u) => u.id === selectedID);

    setUser(selectedUser);
  }

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <select className="user-picker" onChange={handleSelect} value={user?.id}>
      {users.map((u) => (
        <option key={u.id} value={u.id}>
          {u.name}
        </option>
      ))}
    </select>
  );
}
