import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import ComicsHomePage from '../components/ComicsHomePage';
import ReviewsPage from '../components/ReviewsPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <PublicRoute path="/" component={ComicsHomePage} layout={MainLayout} exact={true} />
        <PublicRoute path="/reviews" component={ReviewsPage} layout={MainLayout} />
        <PublicRoute component={NotFoundPage} layout={MainLayout}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
