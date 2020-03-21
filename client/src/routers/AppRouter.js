import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ComicsHomePage from '../components/ComicsHomePage';
import ReviewsPage from '../components/ReviewsPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={ComicsHomePage} exact={true} />
        <Route path="/reviews" component={ReviewsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
