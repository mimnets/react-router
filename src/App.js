import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './Layout/Main';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children: [
      {path:'/home', element: <Home></Home>},
      {path:'about', element: <About></About>},
      {path:'/products', element: <Products></Products>},
      {path:'/friends',
      loader: async () =>{
      return fetch('https://jsonplaceholder.typicode.com/users'
      )},
    element: <Friends></Friends>},
    {
      path:'/friend/:friendId', 
      loader: async({params})=>{
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      element: <FriendDetails></FriendDetails>
    }
    ]},
    
    {path:'*', element: <div>Route not found</div>}
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;