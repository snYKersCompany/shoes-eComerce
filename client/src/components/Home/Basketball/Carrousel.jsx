import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllProducts} from "../../../redux/features/products/productsActions";
import { useEffect } from "react";
import CardBasketball from "./CardCarrousel";


const Carrousel = ({name, category, gender="men"}) => {

    const dispatch = useDispatch();
    let { products} = useSelector((state) => state.products)
    if (products.length && gender.length){
        products = products.length >1? products.filter(el => el.category[0]=== category && el.gender[0] === "men") : products
    } 
    else{
        products = products.length >1? products.filter(el => el.category[0]=== category) : products

    }
    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);

      console.log(products);

    return(
        <>
        <h3 className="titleCarrouselBskt">{name}</h3>
        <div className="containerCarrouselBskt">
            {products[0]!=='void' && products?.length >1?
            products.slice(0,25).map(el =>
                <div className="individualCardContainerBskt">
                    <CardBasketball name={el.name} img={el.card_picture}  />
                </div>
            )
            :
            <CardBasketball name={"nada aún"}/>
        }
        </div>
        </>
    )
}

export default Carrousel