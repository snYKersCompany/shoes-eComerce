import React from "react";
import FilterCategory from "./FilterCategory.jsx";
import FilterGender from "./FilterGender.jsx";
import FilterPrice from "./FilterPrice.jsx";
import FilterRating from "./FilterRating.jsx";
import ClearFilters from "./ClearFilters.jsx";
import FilterBrand from "./FilterBrand";
import OrderByAlphabet from "./OrderByAlphabet";
import Example from "./FilterContainer.jsx";

const Filters = ({ setActualPage }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      <div className="d-flex flex-wrap">
        <div className="d-flex">
          <FilterCategory setActualPage={setActualPage} />
          <FilterGender />
          <FilterRating setActualPage={setActualPage} />
          <FilterBrand />
          <ClearFilters />
        </div>
        <div className="d-flex">
          <OrderByAlphabet />
          <FilterPrice setActualPage={setActualPage} />
        </div>
        <Example />
      </div>
    </div>
  );
};

export default Filters;
