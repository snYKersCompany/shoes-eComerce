import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, getOrderDetails } from '../../redux/features/orders/ordersActions';
import { PDFViewer } from '@react-pdf/renderer';
import DocPDF from './DocPDF';

function AdminDashboardOrders() {
    const dispatch = useDispatch()
    const [viewPdf, setViewPdf] = useState(true)

    const { orders, orderDetails } = useSelector( state => state.orders)

    useEffect(()=>{
        dispatch(getAllOrders())
    },[dispatch])

    console.log(orderDetails)

    const handlerViewPdf = ({_id})=>{
        dispatch(getOrderDetails(_id))
        console.log(_id)
        setViewPdf(!viewPdf)
    }

    const handlerDetailPopUp = (str)=>{
        console.log(str)
    }

    const handlerDeleteOrder = (_id)=>{
        console.log(_id)
    }

    const handlerButon = ()=>{
        setViewPdf(!viewPdf)
    }

    return (
        <>
            {viewPdf?
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>_id</th>
                            <th>Fecha</th>
                            <th>User</th>
                            <th>Direccion</th>
                            <th>Estado de compra</th>
                            <th>Comprobante</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order=><tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.date}</td>
                            <td>User</td>
                            <td>User City</td>
                            <td>{order.state}</td>
                            <td>
                                <Button 
                                variant="primary"
                                onClick={()=>{handlerViewPdf(order)}}
                                >PDF</Button>
                            </td>
                            <td>
                                <Button 
                                variant="primary"
                                onClick={()=>{handlerDetailPopUp("Detail PopUp")}}
                                >Detail PopUp</Button>{' '}
                                <CloseButton onClick={()=>{handlerDeleteOrder(order._id)}}/>
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
            : 
            <>
                <Button 
                variant="primary"
                onClick={handlerButon}
                >Back</Button> 
                <PDFViewer style={{ width: "100%", height: "90vh"}}>
                    {orderDetails?
                        <DocPDF orderDetails = {orderDetails}/>
                    :null}
                </PDFViewer>
            </>}
        </>
    );
}

export default AdminDashboardOrders;