import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllProducts} from "../../../redux/features/products/productsActions";
import { useEffect } from "react";
import CardCarrousel from "./CardCarrousel";
import "../../../styles/carrouselMain.css";



const Carrousel = () => {

    const dispatch = useDispatch();
    const { products} = useSelector((state) => state.products)
    console.log(products)
    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);

    return(
        <>
        <h1 className="carr-txt">Find your style...</h1>
        
        <div className="containerCarrousel">
            {products[0]!=='void' && products?.length >1?
            products.slice(0,25).map(el =>
                <div className="individualCardContainer">
                    <CardCarrousel name={el.name} img={el.card_picture}  />
                </div>
            )
            :
            <CardCarrousel name={"Loading.."}/>
            }
        </div>
        </>
    )
}

export default Carrousel;