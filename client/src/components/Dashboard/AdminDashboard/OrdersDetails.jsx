import React from "react";
import "../../../styles/ordersDetails.css";
import Button from "react-bootstrap/Button";

const OrderDetails = ({ setOrderDetails }) => {
  //state de la orden
  const product = {
    _id: "6390b2bd95ee24ce5a09c667",
    sales: 0,
    name: "Air Jordan",
    brand: "Nike",
    card_picture:
      "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
    price: 53,
    has_stock: 3,
    count: 1,
    size: 10.5,
  };

  return (
    <>
      <div className="d-flex containerCardCart justify-content-evenly">
        <div className="d-flex h-100 text-center align-items-center">
          <img
            src={product.card_picture}
            alt={product.name}
            className="imgCardCart"
          />
          <div className="d-flex flex-column ">
            <h3 className="text-green">{product.brand}</h3>
            <h3 className="text-white">{product.name}</h3>
          </div>
          <div
            className="d-flex marg h-75 bg-line"
            style={{ width: "3px" }}
          ></div>
        </div>
        <div className="d-flex h-100 flex-column justify-content-center div2">
          <h3 className="text-green">Size: {product.size}</h3>
          <h3 className="text-white">Count: {product.count}</h3>
        </div>
        <div>
          <h3 className="text-yellow">Price: ${product.price}</h3>
          <h3 className="text-total">
            Total: ${product.price * product.count}
          </h3>
        </div>
      </div>
      <>
        <Button
          variant="primary"
          onClick={() => {
            setOrderDetails();
          }}
        >
          Back
        </Button>
      </>
    </>
  );
};

export default OrderDetails;
