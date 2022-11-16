import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <div>This is a default page</div>},
    {path:'/home', element: <div>This is a Home page</div>},
    {path:'about', element: <div>This is a About page</div>},
    {path:'/contact', element: <div>This is a Contact page</div>}
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;