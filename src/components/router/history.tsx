import React from 'react';
import MainPage from '@components/pages';
import { createBrowserRouter } from 'react-router-dom';

const history = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
]);

export default history;
