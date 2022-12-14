import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAdds } from "../../redux/features/products/productsActions";
import Form from "react-bootstrap/Form";

const FilterRating = ({ setActualPage }) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const map = products.map((e) => e.rating);
  const dry = [...new Set(map)];
  const sort = dry.sort();

  function handleFilterRating(e) {
    e.preventDefault();
    dispatch(filterAdds({ rating: e.target.value }));
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
      {sort &&
        sort.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
    </Form.Select>
  );
};

export default FilterRating;
