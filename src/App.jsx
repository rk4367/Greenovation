import React from "react";
import "./App.css";
import Header from "./Component/Header.jsx";
import Home from "./Component/Home.jsx";
import NavBar from "./Component/navbar.jsx";
import Checkout from "./Component/Checkout.jsx"
import Login from "./Component/Login.jsx";
import Headergreen from "./Component/Headergreen.jsx";
import Homegreen from "./Component/Homegreen.jsx";
import NavBarg from "./Component/navbargreen.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EducationSection from "./Component/Educationsection.jsx";
import SustainabilityReportsSection from "./Component/Sustainability.jsx";
import Footer from "./Component/Footer.jsx";
import Orders from "./Component/Orders.jsx";
import Thanks from "./Component/thanks.jsx";
import SellerSection from "./Component/SellerSection.jsx";
import Submitted from "./Component/Submitted.jsx";
import Dashboard from "./Component/Dashboard.jsx";
import Feedback from "./Component/feedback.jsx";
import ProductDetails from "./Component/ProductDetails.jsx";
import ProductDetails1 from "./Component/ProductDetails1.jsx";
import FSubmitted from "./Component/Feedbacksubmitted.jsx";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          {/* <Route path="/greenovation" element={<Homegreen/>}/> */}
          <Route path="/feedbacksubmitted" element={[<Headergreen/>, <NavBarg/>, <FSubmitted/>]}/>
          <Route path="/feedback" element={[<Headergreen/>, <NavBarg/>, <Feedback/>, <Footer/>]}/> 
          <Route path="/submitted" element={[<Headergreen/>, <Submitted/>]}/> 
          <Route path="/seller" element={[<Headergreen/>, <NavBarg/>, <SellerSection/>, <Footer/>]}/> 
          <Route path="/thanks" element={[<Header />, <Thanks/>]}/> 
          <Route path="/orders" element={[<Header />, <Orders/>, <Footer/>]}/>
          <Route path="/sustainability" element={[<Headergreen/>,<NavBarg/>, <SustainabilityReportsSection/>, <Footer/>  ]}/>
          <Route path="/education" element={[<Headergreen/>,<NavBarg/>, <EducationSection/>, <Footer/>  ]}/>
          <Route path="/green" element={[<Headergreen/>,<NavBarg/>, <Homegreen/>, <Footer/>  ]}/>
          <Route path="/login" element={<Login/>}/> 
          <Route path="/checkout" element={[<Header />, <Checkout/>, <Footer/>  ]}/>
          <Route path="/" element={[<Header />, <NavBar/>, <Home />, <Footer/>  ]}/>
          <Route path="/dashboard" element={[<Header />, <NavBarg/>, <Dashboard/>]} />
          <Route path="/product" element={[<Headergreen />, <NavBarg />, <ProductDetails />, <Footer />]}/>
          <Route path="/product1" element={[<Headergreen />, <NavBarg />, <ProductDetails1 />, <Footer />]}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

