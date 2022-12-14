import React from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { deletefilters, filterAdds } from "../../redux/features/products/productsActions";


const FilterGenre = ({ setActualPage }) =>{
    const dispatch = useDispatch()

    function handleFilterGenre(e) {
        e.preventDefault();
        if(e.target.value === "none") dispatch(deletefilters("gender"))
        else dispatch(filterAdds({ gender: e.target.value }));
        setActualPage(1);
    }

    return(
        <Form.Select className="d-flex m-1" defaultValue='none' onChange={handleFilterGenre}>
            <option value='none'>Genre</option>
            <option value="men">Male</option>
            <option value="women">Female</option>
            <option value="unisex">Unisex</option>
        </Form.Select>
    )
}
