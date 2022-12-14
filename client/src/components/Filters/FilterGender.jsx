import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAdds } from "../../redux/features/products/productsActions";
import Form from "react-bootstrap/Form";
// import { BsGearWideConnected } from "react-icons/bs";

const FilterGender = () => {

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);


  const mapeo = products.map((e) => e.gender)
  const join = mapeo.join().split(',')
  const dry = [...new Set(join)]


    function handleFilterCategories(e) {
      e.preventDefault();
      dispatch(filterAdds({ gender: e.target.value }));
    }

    return (
      <Form.Select className="d-flex m-1 " defaultValue="none"
      onChange={(e) => {handleFilterCategories(e);}}
      >

        <option value="none" hidden>
          Genre
        </option>
        { dry && dry.map((e, i) => (
            <option key={i} value={e}>{e}</option>
        ))}

      </Form.Select>
    );
};

export default FilterGender;