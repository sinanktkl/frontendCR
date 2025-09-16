import './App.css'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Products from './pages/Products'
import Service from './pages/Service'
import JoinUs from './pages/JoinUs'
import Privacy from './pages/Privacy'
import '../src/bootstrap.min.css';

import { Route, Router, useLocation } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Admin from './pages/Admin/Admin'
import Booked from './pages/Admin/Booked'
import FreeQuote from './pages/Admin/FreeQuote'
import Orders from './pages/Admin/Orders'
import Testimonials from './pages/Admin/Testimonials'
import UiEdits from './pages/Admin/UiEdits'
import Billing from './pages/Admin/Billing'
import ConfirmedOrders from './pages/Admin/ConfirmedOrders'
import Banner from './pages/Admin/Banner'
import AddProducts from './pages/Admin/AddProducts'
import DisplayHomeProducts from './pages/Admin/DisplayHomeProducts'
import ProtectedRoute from './components/ProtectedRoute'
import MyOrders from './components/MyOrders'


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BillingCalc from './pages/Admin/BillingCalc'
import Bills from './pages/Admin/Bills'

function App() {
  const location = useLocation()


  // Paths where you don't want the Header

  const hideHeaderPaths = ['/login', '/register'];
  // console.log(hideHeaderPaths);

  // Check if the current path is in the hideHeaderPaths array

  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);
  // console.log(shouldHideHeader);



  const hideFooterPaths = ['/login', '/register', '/admin', '/booked', '/freequote', '/orders', '/testimonials', '/uiedits', '/billing', '/confirmedorders', '/banner', '/displayhomeproducts', '/addproducts'];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname)

  return (
    <>
     <ToastContainer position="top-right" autoClose={3000} newestOnTop />

      {!shouldHideHeader && <Header />}
      {/* <Router> */}
      <Routes>
        <Route path="/login" element={<Auth login={true} />} />
        <Route path="/register" element={<Auth login={false} />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/joinus" element={<JoinUs />} />



        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Service />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/my-orders" element={<MyOrders />} />

        <Route path="/admin" element={
          <ProtectedRoute allowedRole="admin">
            <Admin />
          </ProtectedRoute>
        } />
        <Route path="/booked" element={
          <ProtectedRoute allowedRole="admin">
            <Booked />
          </ProtectedRoute>
        } />
        <Route path="/freequote" element={
          <ProtectedRoute allowedRole="admin">
            <FreeQuote />
          </ProtectedRoute>
        } />
        <Route path="/orders" element={
          <ProtectedRoute allowedRole="admin">
            <Orders />
          </ProtectedRoute>
        } />
        <Route path="/testimonials" element={
          <ProtectedRoute allowedRole="admin">
            <Testimonials />
          </ProtectedRoute>
        } />
        <Route path="/uiedits" element={
          <ProtectedRoute allowedRole="admin">
            <UiEdits />
          </ProtectedRoute>
        } />
        <Route path="/billing" element={
          <ProtectedRoute allowedRole="admin">
            <Billing />
          </ProtectedRoute>
        } />
        <Route path="/billingcalc" element={
          <ProtectedRoute allowedRole="admin">
            <BillingCalc />
          </ProtectedRoute>
        } />
        <Route path="/bills" element={
          <ProtectedRoute allowedRole="admin">
            <Bills />
          </ProtectedRoute>
        } />
        <Route path="/confirmedorders" element={
          <ProtectedRoute allowedRole="admin">
            <ConfirmedOrders />
          </ProtectedRoute>
        } />
        <Route path="/displayhomeproducts" element={
          <ProtectedRoute allowedRole="admin">
            <DisplayHomeProducts />
          </ProtectedRoute>
        } />
        <Route path="/addproducts" element={
          <ProtectedRoute allowedRole="admin">
            <AddProducts />
          </ProtectedRoute>
        } />
        <Route path="/banner" element={
          <ProtectedRoute allowedRole="admin">
            <Banner />
          </ProtectedRoute>
        } />
        {/* <Route path="/booked" element={<Booked />} />
        <Route path="/freequote" element={<FreeQuote />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/uiedits" element={<UiEdits />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/confirmedorders" element={<ConfirmedOrders />} />
        <Route path="/displayhomeproducts" element={<DisplayHomeProducts />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/banner" element={<Banner />} /> */}



        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Router> */}
      {!shouldHideFooter && <Footer />}
    </>
  )
}

export default App
