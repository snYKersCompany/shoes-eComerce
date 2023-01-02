import { useDispatch } from "react-redux";
import { getPaypal } from "../../redux/features/reviews/reviewsActions";

const { useEffect } = require("react")


const PaypalEjemplo = ()=>{
    const dispatch = useDispatch();
    console.log(window.location.search)
    useEffect(()=>{
        // dispatch(getPaypal(window.location.search))

    },[dispatch])
    return(
        <h1>Hola Paypal</h1>
    )
}

export default PaypalEjemplo;