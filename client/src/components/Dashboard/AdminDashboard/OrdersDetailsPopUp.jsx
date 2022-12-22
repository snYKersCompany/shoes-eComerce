import Button from 'react-bootstrap/Button';
import MiddleViewCard from '../../Paypal/Preview/MiddleViewCard';

const OrderDetailsPopUp = ({setOrderDetails})=>{


    return(
        <div>
            <MiddleViewCard/>
            <Button variant="primary" onClick={()=>{setOrderDetails()}}>Primary</Button>{' '}
        </div>
    )
}

export default OrderDetailsPopUp