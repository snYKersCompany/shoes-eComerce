import React from "react";
import Form from 'react-bootstrap/Form';


const FilterRating= () =>{
    return(
        <Form.Select className="d-flex m-1" defaultValue='none'>
            <option value='none' hidden>Rating</option>
            <option value="1">5</option>
            <option value="2">4</option>
            <option value="3">3</option>
            <option value="4">2</option>
            <option value="5">1</option>
        </Form.Select>
    )
}

export default FilterRating