import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterCategory from "./FilterCategory.jsx";
import FilterGenre from "./FilterGenre.jsx";
import FilterPrice from "./FilterPrice.jsx";
import FilterRating from "./FilterRating.jsx";
import FilterOrder from "./FiltersOrder.jsx";
// import { getProductByCategory } from '../../redux/features/products/productsActions';





const Filters = ({ setActualPage }) => {

  // const { statesFilters } = useSelector((state) => state.statesFilters)

  // const dispatch = useDispatch();

  // useEffect((e) => {
  //   dispatch(getProductByCategory(e))
  // }, [dispatch])




  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex">
        <FilterCategory
          setActualPage={setActualPage}
        />
        <FilterGenre />
        <FilterPrice />
        <FilterRating setActualPage={setActualPage} />
        <FilterOrder />
      </div>
    </div>
  );
};

export default Filters;
