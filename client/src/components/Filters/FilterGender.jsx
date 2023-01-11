import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAdds, deletefilters } from "../../redux/features/products/productsActions";
import Form from "react-bootstrap/Form";

const FilterGender = ({setActualPage}) => {
  const dispatch = useDispatch();
  const { genders } = useSelector((state) => state.products);

  function handleFilterCategories(e) {
    e.preventDefault();
    if(e.target.value === "none") dispatch(deletefilters("gender"))
    else dispatch(filterAdds({ gender: e.target.value }));
    setActualPage(1)
  }

  return (
    <Form.Select
      className="d-flex m-1 "
      defaultValue="none"
      onChange={(e) => {
        handleFilterCategories(e);
      }}
    >
      <option value="none">
        Gender
      </option>
      {genders &&
        genders.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
    </Form.Select>
  );
};

export default FilterGender;
