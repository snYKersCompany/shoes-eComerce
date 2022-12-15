import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletefilters, filterAdds } from "../../redux/features/products/productsActions";
import Form from "react-bootstrap/Form";

const FilterRating = ({ setActualPage }) => {
  const dispatch = useDispatch();
  const { ratings } = useSelector((state) => state.products);


  function handleFilterRating(e) {
    e.preventDefault();
    if(e.target.value === "none") dispatch(deletefilters("rating"))
    else dispatch(filterAdds({ rating: e.target.value }));
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
      <option value="none">
        Rating
      </option>
      {ratings &&
        ratings.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
    </Form.Select>
  );
};

export default FilterRating;
