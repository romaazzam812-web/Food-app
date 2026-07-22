//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css';
import Root from './Pages/Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
import Pages from './Pages/Pages/Pages';
import Contact from './Pages/Contact/Contact';
import Book from './Pages/Book/Book';
import Blog from './Pages/Blog/Blog';
import RecipeProvider from './components/Context/RecipeContext';
import BlogDetails from './Pages/BlogDetails/BlogDetails';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{
      path: "/",
      Component: Home,
    },
    {
      path: "/About",
      Component: About,
    },
    {
      path: "/Menu",
      Component: Menu,
    },
    {
      path: "/Pages",
      Component: Pages,
    },
    {
      path: "/Contact",
      Component: Contact,
    },
    {
      path: "/Book",
      Component: Book,
    },
    {
      path: "/Blog",
      Component: Blog,
    },
    {
      path: "/BlogDetails/:id",
      Component: BlogDetails,
    },
    ]
  },

]);



const root = document.getElementById("root");

createRoot(document.getElementById('root')).render(
  <RecipeProvider>
    <RouterProvider router={router} />
  </RecipeProvider>
);
