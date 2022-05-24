import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivRoute = (props) => {
    const { component: Component, ...rest } = props
    
    return <Route
            {...rest}
            render={() => {
                return localStorage.getItem('token') ? <Component/>
                : <Redirect to="login"/>
            }}

            />
}

export default PrivRoute