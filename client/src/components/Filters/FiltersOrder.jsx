import React from "react";
import Form from 'react-bootstrap/Form';


const FilterOrder = () =>{
    return(
        <Form.Select className="d-flex m-1" defaultValue='none'>
            <option value='none' hidden>Others</option>
            <option value="1">Promotions</option>
            <option value="2">Popular</option>
            <option value="3">New</option>
        </Form.Select>
    )
}

export default FilterOrder