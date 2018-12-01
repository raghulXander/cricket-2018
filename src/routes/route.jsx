import React from 'react';

import {
  Router,
  Route,
  Redirect
} from 'react-router-dom';

import Main from '../containers/home.jsx';
import Gallery from '../containers/gallery.jsx';
import PageNotFound from '../containers/pagenotfound.jsx';
import ScrollableBar from '../containers/matches.jsx';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/matches',
        component: ScrollableBar
    },
    {
        path: '/gallery',
        component: Gallery
    },
    {
        path: '*',
        component: PageNotFound
    }
];

export default routes;
