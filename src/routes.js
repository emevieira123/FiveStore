import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Sections from './Pages/Section/section';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Sections} />
      </Switch>
    </BrowserRouter>
  );
}
