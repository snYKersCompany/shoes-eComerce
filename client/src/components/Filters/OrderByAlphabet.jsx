import React, {useState} from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { addOrders /*, deletefilters */ } from "../../redux/features/products/productsActions";

const OrderByAlphabet = () => {
  const dispatch = useDispatch();

  function handleFilterCategories(e) {
    e.preventDefault();
    // if(e.target.value === "none") dispatch(deletefilters("name"))
    dispatch(addOrders({ name: e.target.value }));
  }

  return (
    <Form.Select
      className="d-flex m-1 w-25 "
      defaultValue="none"
      onChange={(e) => {
        handleFilterCategories(e);
      }}
    >
      <option value="none" hidden>
        By Name
      </option>
      <option value="1">A to Z</option>
      <option value="-1">Z to A</option>
    </Form.Select>
  );
};

export default OrderByAlphabet;
