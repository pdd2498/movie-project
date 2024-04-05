
import './App.css';
import Home from './pages/Home';
import Movie from './pages/Movie'
import TvShow from './pages/TvShow'
import Full from './pages/Full';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import SearchPage from './pages/SearchPage';


const routes = createBrowserRouter([
  {
    path:'/',
    Component:Home,
  },
  {
    path: "/movie",
    Component:Movie,
  },
  {
    path:"/tvshow",
    Component:TvShow,
  },
  {
    path:'/movie/:name',
    Component:Full
  },
  {
    path:'/searchpage/:name',
    Component:SearchPage
  },
  {
    path:'/full/:id',
    Component:Full
  }
])

function App() {
  return (
    <RouterProvider router={routes}>
    
    </RouterProvider>
  );
}

export default App;
