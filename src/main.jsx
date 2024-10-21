import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Project1 from './components/Project1.jsx'
import Project2 from './components/Project2.jsx'
import Other from './components/Other.jsx'



const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'education',
        element: <Education />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'other',
        element: <Other />,
      },
      {
        path: 'projects',
        element: <Projects />,
        children: [
          {
            path: 'project1',
            element: <Project1 />,
          },
          {
            path: 'project2',
            element: <Project2 />,
          },
        ],
      },
      {
        path: '*',
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
