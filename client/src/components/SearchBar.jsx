import React from "react";
import Form from 'react-bootstrap/Form';

export default function SearchBar(){
    
    const handleSubmit =(e) =>{
        e.preventDefault()
    }
    
    
    return(
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group>
                <Form.Control
                    type="search"
                    placeholder="Discover a new world"
                />
            </Form.Group>
        </Form>
)
}