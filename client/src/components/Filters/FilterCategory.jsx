import React from "react";
import Form from 'react-bootstrap/Form';


const FilterCategory = () =>{
    return(
        <Form.Select className="d-flex m-1 " defaultValue='none'>
            <option value='none' hidden>Category .</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    )
}

export default FilterCategory