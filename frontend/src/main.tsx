import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import SponsorsPage from '@/pages/SponsorsPage'
import TeamPage from '@/pages/TeamPage'
import SchedulePage from '@/pages/SchedulePage'
import EventsPage from '@/pages/EventsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'sponsors', element: <SponsorsPage /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'schedule', element: <SchedulePage /> },
      { path: '*', element: <HomePage /> }, // Catch-all route for 404s
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
