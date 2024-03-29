import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/Home';
import Signin from '../pages/Singnin';
import Signup from '../pages/Signup';
import ChangePassword from "../ChangePassword";
import useAuth from '../hooks/useAuth';


const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/" element={<Signin />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route path="*" element={<Signin />} />
                    <Route exact path="/change-password" element={<ChangePassword />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;