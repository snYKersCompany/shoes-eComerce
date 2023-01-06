import React from "react";
import { Document, Page, Text } from "@react-pdf/renderer";

const DocPDF = ({ orderDetails }) => {
  return (
    <Document>
      <Page size="A4">
        <Text>ID: {orderDetails._id}</Text>
        <Text>Estado: {orderDetails.state}</Text>
        <Text>Info de comprobante de pago: {orderDetails.voucher}</Text>
        <Text>Productos: {orderDetails._idProduct}</Text>
      </Page>
    </Document>
  );
};

export default DocPDF;
