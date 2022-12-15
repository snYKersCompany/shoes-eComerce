import React from "react"
import { Document, Image, Page, Text, View } from "@react-pdf/renderer"

const DocPDF = ({orderDetails})=>{
    
    // <div></div> ===> <View></View>
    // <p></p> ===> <Text></Text>
    // <img/> ===> <Image/>
    return (
        <Document>
            <Page size="A4">
                <Text>ID: {orderDetails._id}</Text>
                <Text>Estado: {orderDetails.state}</Text>
                <Text>Info de comprobante de pago: {orderDetails.voucher}</Text>
                <Text>Productos: {orderDetails._idProduct}</Text>
            </Page>
        </Document>
    )
}

export default DocPDF