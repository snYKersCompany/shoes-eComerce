import React from "react";
import Form from 'react-bootstrap/Form';


const FilterGenre = () =>{
    return(
        <Form.Select className="d-flex m-1" defaultValue='none'>
            <option value='none' hidden>Genre</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Unisex</option>
        </Form.Select>
    )
}

export default FilterGenre