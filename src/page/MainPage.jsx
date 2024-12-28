import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const MainPage = () =>{
    console.log('Rendering Protected Route');
    const navigate = useNavigate();

    const logout = () =>{
        Cookies.remove('token');
        console.log('cookie removed')
        return navigate("/", {replace : true});
    }

    return (
        <div>
            <button onClick={()=>logout()} type="button">Logout</button>
        </div>
    )
}

export default MainPage;