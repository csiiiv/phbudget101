import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '@/layouts/AppLayout';
import { HomePage } from '@/pages/HomePage';
import { ModulePage } from '@/pages/ModulePage';
import { LessonPage } from '@/pages/LessonPage';
import { ReferenceIndexPage } from '@/pages/ReferenceIndexPage';
import { ReferencePage } from '@/pages/ReferencePage';
import { AboutPage } from '@/pages/AboutPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import '@/styles/index.css';

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/modules/:moduleId', element: <ModulePage /> },
        { path: '/modules/:moduleId/lessons/:lessonId', element: <LessonPage /> },
        { path: '/reference', element: <ReferenceIndexPage /> },
        { path: '/reference/:refId', element: <ReferencePage /> },
        { path: '/about', element: <AboutPage /> },
        { path: '/settings', element: <SettingsPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: '/phbudget101' }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
