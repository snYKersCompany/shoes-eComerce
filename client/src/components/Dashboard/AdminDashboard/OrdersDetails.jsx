import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProductDetail from "./CardProductDetail";
import { getOrderDetails } from "../../../redux/features/orders/ordersActions";
import Button from "react-bootstrap/Button";
import "../../../styles/orderDetails.css";

const OrderDetails = ({ setOrderDetails, id }) => {
  const dispatch = useDispatch();
  const { orderDetails } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [dispatch, id]);

  return (
    <div className="orderDetailsContainer d-flex flex-column ">
      <div className="d-flex flex-column justify-content-center align-items-center">
        {orderDetails.products?.map((p, i) => {
          return (
            <div key={i}>
              <CardProductDetail
                key={i}
                name={p.name}
                brand={p.brand}
                card_picture={p.card_picture}
                size={p.size}
                count={p.count}
                price={p.price}
                totalPrice={p.totalPrice}
              />
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-evenly align-content-center align-items-center">
        <Button
          variant="custom"
          className="modalBtn d-inline"
          onClick={() => {
            setOrderDetails();
          }}
        >
          Back
        </Button>
        <h3 className="text-white bg-dark">
          Final Amount: ${orderDetails.finalAmount}
        </h3>
      </div>
    </div>
  );
};

export default OrderDetails;
