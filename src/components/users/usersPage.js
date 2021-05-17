import { useState, Suspense } from 'react';
import UsersList from './usersList';
import UserDetails from './userDetails';

import PageSpinner from '../ui/pageSpinner';

import { useUser } from './userContext'; // import the shared context

export default function UsersPage() {
  const [loggedInUser] = useUser();
  const [selectedUser, setSelectedUser] = useState(null);
  const user = selectedUser || loggedInUser;

  function switchUser(nextUser) {
    setSelectedUser(nextUser);
  }

  return user ? (
    <main className="users-page">
      <UsersList user={user} setUser={switchUser} />

      <Suspense fallback={<PageSpinner />}>
        <UserDetails userID={user.id} />
      </Suspense>
    </main>
  ) : (
    <PageSpinner />
  );
}
