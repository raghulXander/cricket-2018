import React from 'react';

import {
  Router,
  Route,
  Redirect
} from 'react-router-dom';

import Main from '../containers/main.jsx';
import Gallery from '../containers/gallery.jsx';
import PageNotFound from '../containers/pagenotfound.jsx';
import ScrollableBar from '../containers/home.jsx';

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
