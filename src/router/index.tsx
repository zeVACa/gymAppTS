import React from 'react';
import Landing from '../pages/Landing/Landing';
import { Login } from '../pages/Login/Login';
import { PreSession } from '../pages/PreSession/PreSession';

interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  LANDING = '/',
  PRE_SESSION = '/preSession',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
  { path: RouteNames.LANDING, exact: true, component: Landing },
];

export const privateRoutes: IRoute[] = [{ path: RouteNames.PRE_SESSION, component: PreSession }];
