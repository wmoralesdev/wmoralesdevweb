import React, { FC } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@assets/locales/en/translation.json';
import es from '@assets/locales/es/translation.json';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import history from '@components/router/history';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            es: {
                translation: es,
            },
        },
        lng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

const queryClient = new QueryClient();

const App: FC = () => (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={history} />
    </QueryClientProvider>
);

export default App;
