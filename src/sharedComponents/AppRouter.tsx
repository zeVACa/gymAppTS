import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';

export const AppRouter = () => {
  const isAuthed = true;
  return isAuthed ? (
    <Switch>
      {privateRoutes.map((routeItem, i) => (
        <Route
          key={routeItem.path}
          path={routeItem.path}
          exact={routeItem.exact}
          component={routeItem.component}
        />
      ))}
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((routeItem, i) => (
        <Route
          key={routeItem.path}
          path={routeItem.path}
          exact={routeItem.exact}
          component={routeItem.component}
        />
      ))}
    </Switch>
  );
};
