import React from "react";
import Form from 'react-bootstrap/Form';
export default function SearchBar(){
    
    const handleSubmit =(e) =>{
        e.preventDefault()
    }
    
    
    return(
        <Form onSubmit={(e) => handleSubmit(e)} className="d-flex justify-content-center">
            <Form.Group className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Discover a new world"
                    className="d-flex p-2 mt-4"
                />
            </Form.Group>
        </Form>
)
}