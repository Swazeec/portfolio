import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row } from 'react-bootstrap';

import RootLayout from './components/RootLayout';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    errorElement: <Error/>,
    children:[
      {index: true, element: <About/>},
      {path:'/about', element: <About/>},
      {path:'/projects', element: <Projects/>},
      {path:'/contact', element: <Contact/>}
    ]
  },
])

function App() {
  return (
    <Container fluid className='p-0'>
      <Row>
        <RouterProvider router={router} />
      </Row>
    </Container>
  )
}

export default App;
