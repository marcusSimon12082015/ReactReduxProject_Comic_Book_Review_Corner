import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import ProfilePage from '../components/ProfilePage';
import ComicsHomePage from '../components/ComicsHomePage';
import SignUpLayout from '../components/SignUpLayout';
import MainLayout from '../components/MainLayout';
import ReviewsPage from '../components/ReviewsPage';
import ComicShowPage from '../components/ComicShowPage';
import SignUpPage from '../components/SignUpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <PublicRoute path="/" component={ComicsHomePage} layout={MainLayout} exact={true} />
        <PublicRoute path="/signup" component={SignUpPage} layout={SignUpLayout} />
        <PublicRoute path="/reviews" component={ReviewsPage} layout={MainLayout} />
        <PrivateRoute path="/profile/:id" component={ProfilePage} layout={MainLayout} />
        <PublicRoute path="/comics/:comicId" component={ComicShowPage} layout={MainLayout} />
        <PublicRoute component={NotFoundPage} layout={MainLayout}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
