/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './components/Index'
import Home2 from './components/Home2'
import Home3 from './components/Home3'
import Home4 from './components/Home4'
import Home5 from './components/Home5'
import ComingSoon from './components/ComingSoon'
import SingleFood from './components/SingleFood'
import MenuList from './components/MenuList'
import ResaturantList from './components/ResaturantList'
import MenuCategories from './components/MenuCategories'
import Shop from './components/Shop'
import ShopDetails from './components/ShopDetails'
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'
import OrderTracking from './components/OrderTracking'
import BlogStandard from './components/BlogStandard'
import BlogDetails from './components/BlogDetails'
import About from './components/About'
import Faq from './components/Faq'
import Team from './components/Team'
import TeamDetail from './components/TeamDetail'
import RestaurantDetail01 from './components/RestaurantDetail01'
import RestaurantDetail02 from './components/RestaurantDetail02'
import Contact from './components/Contact'
import Error from './components/Error'


const router = createBrowserRouter([
  {path: "/", element: <Index />},
  {path: "/home-2", element: <Home2 />},
  {path: "/home-3", element: <Home3 />},
  {path: "/home-4", element: <Home4 />},
  {path: "/home-5", element: <Home5 />},
  {path: "/soon", element: <ComingSoon />},
  {path: "/single-food-menu", element: <SingleFood />},
  {path: "/menu-list", element: <MenuList />},
  {path: "/restaurant-list", element: <ResaturantList/>},
  {path: "/menu-categories", element: <MenuCategories/>},
  {path: "/shop/:id?", element: <Shop/>},
  { path: "/shop-detail/:id?", element: <ShopDetails /> },
  {path: "/cart", element: <Cart/>},
  {path: "/checkout", element: <CheckOut/>},
  {path: "/order-tracking", element: <OrderTracking/>},
  {path: "/blog-standard", element: <BlogStandard/>},
  {path: "/blog-detail", element: <BlogDetails/>},
  {path: "/about", element: <About/>},
  {path: "/faq", element: <Faq/>},
  {path: "/team", element: <Team/>},
  {path: "/team-detail", element: <TeamDetail/>},
  {path: "/restaurant-detail01", element: <RestaurantDetail01/>},
  {path: "/restaurant-detail02", element: <RestaurantDetail02/>},
  {path: "/contact", element: <Contact/>},
  {path: "/error", element: <Error/>},


])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
