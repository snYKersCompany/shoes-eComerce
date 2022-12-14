import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import "../../styles/filterPrice.css"
import { useDispatch } from "react-redux";
import { filterAdds } from "../../redux/features/products/productsActions";

const FilterPrice = ({ setActualPage }) =>{
    const dispatch = useDispatch()

    const [price, setPrice] = useState({
        min:'',
        max:''
    })

    const handletPriceMin = ({target})=>{
        setPrice({...price, min:target.value})
    }
    const handletPriceMax = ({target})=>{
        setPrice({...price, max:target.value})
    }
    const haldlerPriceSubmit = ()=>{
        dispatch(filterAdds({priceMin: price.min}))
        dispatch(filterAdds({priceMax: price.max}))
        setActualPage(1)
    }

    return(
        <>
            <Form.Label htmlFor="inputPassword5">Price: </Form.Label>
            <Form.Control
                type="text"
                aria-describedby="passwordHelpBlock"
                placeholder="Min"
                className="m-1 customInput"
                onChange={handletPriceMin}
                value={price.min}
            />
            <Form.Control
                type="text"
                aria-describedby="passwordHelpBlock"
                placeholder="Max"
                className="m-1 customInput"
                onChange={handletPriceMax}
                value={price.max}
            />
            <Button variant="primary" className="m-1 customButom" onClick={haldlerPriceSubmit}>$</Button>{' '}
        </>
    )
}

export default FilterPrice