import { Routes, Route } from 'react-router-dom';

import BookablesView from './bookablesView';
import BookableEdit from './bookableEdit';
import BookableNew from './bookableNew';

export default function BookablesPage() {
  return (
    <Routes>
      <Route path="/:id">
        <BookablesView />
      </Route>
      <Route path="/">
        <BookablesView />
      </Route>
      <Route path="/:id/edit">
        <BookableEdit />
      </Route>
      <Route path="/new">
        <BookableNew />
      </Route>
    </Routes>
  );
}
