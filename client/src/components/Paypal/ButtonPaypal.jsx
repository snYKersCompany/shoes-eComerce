import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsDetails } from "../../redux/features/products/productsActions";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


export default function ButtonPaypal({priceTotal, info}) {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { productDetail } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductsDetails(id));
      }, [dispatch, id]);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: priceTotal,
            items: info.products
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}
