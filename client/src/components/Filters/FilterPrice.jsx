import React from "react";
import Form from 'react-bootstrap/Form';


const FilterPrice = () =>{
    return(
        <Form.Select className="d-flex m-1" defaultValue='none'>
            <option value='none' hidden>Price</option>
            <option value="1">Range 1</option>
            <option value="2">Range 2</option>
            <option value="3">Range 3</option>
            <option value="1">Cheaper</option>
            <option value="1">Expensive</option>
        </Form.Select>
    )
}

export default FilterPrice