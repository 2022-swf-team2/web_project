import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeContainer from "../Screens/Home/HomeContainer";
import MainScreen from "../Screens/Main/MainScreen";
import PageNotFound from "../Screens/PageNotFound";
import TestContainer from "../Screens/Test/TestContainer";
import UserScreen from "../Screens/User/UserScreen";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path="/user" element={<UserScreen/>}/>
            <Route path="/home" element={<MainScreen/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;