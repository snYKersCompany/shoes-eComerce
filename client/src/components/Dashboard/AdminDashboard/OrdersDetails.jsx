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

//state de la orden
// let order = {
//   finalAmount: 458,
//   products: [
//     {
//       id: "63972933f60a0fb9ec9dfe44",
//       name: "Air Jordan",
//       brand: "nike",
//       description: "text",
//       card_picture:
//         "https://image.goat.com/750/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png",
//       size: "4.5",
//       price: 53,
//       count: 5,
//       totalPrice: 265,
//     },
//     {
//       id: "63972933f60a0fb9ec9dfe46",
//       name: "Air Jordan",
//       brand: "nike",
//       description: "text",
//       card_picture:
//         "https://image.goat.com/750/attachments/product_template_pictures/images/008/870/353/original/235806_00.png.png",
//       size: "11.5",
//       price: 73,
//       count: 2,
//       totalPrice: 146,
//     },
//     {
//       id: "63972933f60a0fb9ec9dfe47",
//       name: "Air Jordan",
//       brand: "nike",
//       description: "text",
//       card_picture:
//         "https://image.goat.com/750/attachments/product_template_pictures/images/010/223/048/original/13607_00.png.png",
//       size: "11",
//       price: 73,
//       count: 1,
//       totalPrice: 73,
//     },
//   ],
// };
