import React from "react";

export default function SearchBar(){
    
    const handleSubmit =(e) =>{
        e.preventDefault()
    }
    
    
    return(
    <div className="Container">
        <p>soy el Search</p>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input type="search" />
        </form>
    </div>
)
}