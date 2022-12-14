import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAdds } from "../../redux/features/products/productsActions";
import Form from "react-bootstrap/Form";

const FilterBrand = () => {


    // FALTA CREAR RUTA BACK BUSQUEDA POR MARCA


  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const brands = products.map((e) => e.brand);

  const dry = [...new Set(brands)];

    function handleFilterCategories(e) {
      e.preventDefault();
      dispatch(filterAdds({ brand: e.target.value }));
    }

    return (
      <Form.Select className="d-flex m-1 " defaultValue="none"
      onChange={(e) => {handleFilterCategories(e);}}
      >

        <option value="none" hidden>
          Brand
        </option>
        { dry && dry.map((e, i) => (
            <option key={i} value={e}>{e}</option>
        ))}

      </Form.Select>
    );
};

export default FilterBrand;
