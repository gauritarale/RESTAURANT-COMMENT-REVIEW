// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Component/Navigationbar'
import RestaurantPage from './Component/RestaurantPage';
//import "./LoginPage.module.css"
import './RestaurantPage.css';
import { userContext } from './Context/Context';
//import restaurant from './Component/restaurant'
//import HomePage from './Component/HomePage'
// import './HomePage.css';
import Leaderboard from './Component/Leaderboard';
import './Component/Leaderboard.css'
// import Register from './Component/Register'
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AllClass from './Containers/AllClass/AllClass';
import Home from './Component/Home';
import Login from './Component/Login';
// import RegisterPage from  './Component/RegisterPage';
import RestaurantList from './Component/RestaurantList';
import React, { useState } from 'react';
import './Navbar.css';
import './Component/RegisterPage.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0);

    // return(

    //   <>
    //   <h1>MAI PAGE</h1> 
    //   </>
    // );
            // <Route path="/login">
            //   <LoginPage/>
            // </Route>
            // <Route path="/register">
            //   <RegisterPage /> {/* Define RegisterPage for registration logic */}
            // </Route>

    const[user,setUser] = useState({});

  return(

    <>
    
    <Router>
      <userContext.Provider value={{user,setUser}}>
        <Navbar/>

          <Routes>
            <Route path='/' element={<Leaderboard/>}/> 
            <Route path='/login' element={<Login/>}/> 
            {/* <Route path='/register' element={<Register/>}/>  */}
            <Route path='/leaderboard' element={<Leaderboard/>}/> 
            <Route path='/restaurantlist' element={<RestaurantList/>}/> 
            <Route path='/Home1' element={<RestaurantPage/>}/> 
          </Routes>
        </userContext.Provider>
  </Router>

    </>
    
  );

}

export default App



{/*
   <Router>
        <Navbar/>

        <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
       </Routes>
      </Router>*/}