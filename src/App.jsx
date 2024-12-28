import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./index.css";
import Login from "./page/Login";
import ProtectedRoute from "./component/ProtectedRoute";
import MainPage from "./page/MainPage.jsx";

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login/>}/>

            <Route path="/" element={ <ProtectedRoute> <MainPage/> </ProtectedRoute> }/>
        </Routes>
    </Router>
  );
};

export default App;
