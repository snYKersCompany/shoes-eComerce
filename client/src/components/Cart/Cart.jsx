import React from "react";
import NavBar from "../NavBar/NavBar";
import CardCart from "./CardCart";


const Cart = () => {
    
    return(
        <>
        <NavBar/>
        <div className="d-flex p-5 justify-content-center align-items-center flex-column">
            <CardCart/>
            <CardCart/>
            <CardCart/>
            <CardCart/>
        </div>
        </>
    )
}

export default Cart;