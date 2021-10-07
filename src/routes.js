import React from 'react';

//pages
const Home = React.lazy(() => import('./pages/home/Home'));
const Concreto = React.lazy(() => import('./pages/concetro/Concetro'));

const routes = [
  { path: '/', exact: true, name: 'Início' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/concreto', name: 'Concreto', component: Concreto },
];

export default routes;
