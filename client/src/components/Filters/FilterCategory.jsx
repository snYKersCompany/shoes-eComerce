import React from "react";
import { useDispatch } from "react-redux";
import { filterAdds } from "../../redux/features/products/productsActions";
import Form from "react-bootstrap/Form";

const FilterCategory = () => {
  const dispatch = useDispatch();

  function handleFilterCategories(e) {
    e.preventDefault();
    dispatch(filterAdds({ category: e.target.value }));
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
        Category
      </option>
      <option></option>
      <option value="basketball">Basketball</option>
      <option value="lifestyle">Lifestyle</option>
      <option value="3">Three</option>
    </Form.Select>
  );
};

export default FilterCategory;
