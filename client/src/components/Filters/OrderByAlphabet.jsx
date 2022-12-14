import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAdds } from "../../redux/features/products/productsActions";
import Form from "react-bootstrap/Form";
// import { BsGearWideConnected } from "react-icons/bs";
import { addOrders } from "../../redux/features/products/productsActions";

const OrderByAlphabet = () => {
  // 1 menor a mayor === e.target.value
  //-1 mayor a menor === e.target.value
  const dispatch = useDispatch();

  // const { products } = useSelector((state) => state.products);

  // const name = products.map(e=> e.brand)

  function handleFilterCategories(e) {
    e.preventDefault();
    console.log("esto es e.target.value", e.target.value);
    dispatch(addOrders({ name: e.target.value }));
  }

  return (
    <Form.Select
      className="d-flex m-1 "
      defaultValue="none"
      onChange={(e) => {
        handleFilterCategories(e);
      }}
    >
      <option value="none" hidden>
        Order Products
      </option>
      <option value="1">A to Z</option>
      <option value="-1">Z to A</option>
    </Form.Select>
  );
};

export default OrderByAlphabet;
