import React, { useContext, useState } from "react";
import Context from "../../contexapi/Context";
import '../Css/ForComponent.css';
import { NavLink, useLocation } from "react-router-dom";

const AddAndShowDoneTask = () => {

    const context = useContext(Context)
    let copystate2;
    let location = useLocation()

    if (location.pathname === '/') {
        copystate2 = <NavLink to="/done" style={{ marginRight: "2px", textDecoration: "none" }} className="fs-7 p-3 btnadvanced" >کارهای انجام شده</NavLink>
    } else {
        copystate2 = <NavLink to="/" style={{ marginRight: "2px", textDecoration: "none" }} className="fs-7 p-3 btnadvanced" >خانه</NavLink>
    }

    return (
        <div className="d-flex">
            <button style={{ marginLeft: "2px" }} className="fs-7 p-3 border-0 btnadvanced" onClick={context.showehideaddtodo}>اضافه کردن</button>
            <div className='d-flex'> {copystate2} </div>
        </div>
    )
}


export default AddAndShowDoneTask