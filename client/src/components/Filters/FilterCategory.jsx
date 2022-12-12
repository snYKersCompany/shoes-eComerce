import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAdds } from "../../redux/features/products/productsActions";
import Form from "react-bootstrap/Form";

const FilterCategory = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.products);

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
      {categories &&
        categories.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
        
    </Form.Select>
  );
};

export default FilterCategory;
