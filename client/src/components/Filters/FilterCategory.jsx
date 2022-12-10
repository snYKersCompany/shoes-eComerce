import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";

import { getProductByCategory } from '../../redux/features/products/productsActions';



const FilterCategory = ({ setActualPage }) => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products)//<--- para todos los filters que necesiten estado

    // const { productCategory } = useSelector((state) => state.productCategory)
    


 console.log('esto es prod', products)

    const handleFilterCategory = (e) => {
        e.preventDefault();
        dispatch(getProductByCategory(e.target.value))
        setActualPage(1);
    }


    return (
        <Form.Select
            className="d-flex m-1 "
            defaultValue='none'
            onChange={(e) => { handleFilterCategory(e) }}
        >

            {/* {
                products?.map(e=> (
                    <option 
                    value={e}
                    key={e}>{e}</option>
                ))
            } */}
            <option value='none' hidden>Category .</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    )
}

export default FilterCategory