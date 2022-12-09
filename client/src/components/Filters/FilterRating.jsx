import React from "react";
import { useDispatch } from "react-redux";
import { filterRatings } from "../../redux/features/products/productsActions";
import Form from "react-bootstrap/Form";

const FilterRating = ({ setActualPage }) => {
  const dispatch = useDispatch();

  function handleFilterRating(e) {
    e.preventDefault();
    console.log("::::::::::::::::::ESTO ES E.TARGET.VALUE", e.target.value);
    dispatch(filterRatings(e.target.value));
    setActualPage(1);
  }

  return (
    <Form.Select
      className="d-flex m-1"
      defaultValue="none"
      onChange={(e) => {
        handleFilterRating(e);
      }}
    >
      <option value="none" hidden>
        Rating
      </option>
      <option value="all">all</option>
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
      <option value="0">New</option>
    </Form.Select>
  );
};

export default FilterRating;
