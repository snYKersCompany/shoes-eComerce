import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, getOrderDetails } from '../../../redux/features/orders/ordersActions';
import { PDFViewer } from '@react-pdf/renderer';
import DocPDF from './DocPDF';

function AdminDashboardOrders({setOrderDetails}) {
    const dispatch = useDispatch()
    const [viewPdf, setViewPdf] = useState(true)

    const { orders, orderDetails } = useSelector( state => state.orders)

    useEffect(()=>{
        dispatch(getAllOrders())
    },[dispatch])

    // console.log(orderDetails)

    const handlerViewPdf = ({_id})=>{
        dispatch(getOrderDetails(_id))
        console.log(_id)
        setViewPdf(!viewPdf)
    }

    const handlerDetailPopUp = (str)=>{
        console.log(str)
        setOrderDetails()
    }

    const handlerDeleteOrder = (_id)=>{
        console.log(_id)
    }

    const handlerButon = ()=>{
        setViewPdf(!viewPdf)
    }
    console.log(orders)
    return (
        <>
            {viewPdf?
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>_id</th>
                            <th>Fecha</th>
                            <th>User</th>
                            <th>Estado de compra</th>
                            <th>Comprobante</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, i)=><tr key={i}>
                            <td>{order._id}</td>
                            <td>{order.date}</td>
                            <td>User</td>
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
                                >Details</Button>{' '}
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
                <PDFViewer style={{ width: "90vw", height: "90vh"}}>
                    {orderDetails?
                        <DocPDF orderDetails = {orderDetails}/>
                    :null}
                </PDFViewer>
            </>}
        </>
    );
}

export default AdminDashboardOrders;