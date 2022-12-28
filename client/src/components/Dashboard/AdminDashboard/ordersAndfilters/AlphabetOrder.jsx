import React from "react";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";

//

const AlphabetOrder = () => {
  const { orders } = useSelector((state) => state.orders);
  const dates = orders.map((e) => e.date.split("T"));

  // console.log(dates);

  const orderDates = () => {};

  const handleOnClick = (e) => {
    e.preventDefault();
    orderDates(e.target.value);
  };

  return (
    <Form.Select
      size="sm"
      className="d-flex m-1"
      onChange={(e) => {
        handleOnClick(e);
      }}
    >
      <option value="none" defaultValue="none">
        order by date
      </option>

      <option value="new" key="n">
        newest
      </option>
      <option value="old" key="o">
        oldest
      </option>
    </Form.Select>
  );
};

export default AlphabetOrder;
