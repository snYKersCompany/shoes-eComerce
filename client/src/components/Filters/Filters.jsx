import React from "react";
import FilterCategory from "./FilterCategory.jsx";
import FilterGender from "./FilterGender.jsx";
import FilterPrice from "./FilterPrice.jsx";
import FilterRating from "./FilterRating.jsx";
// import FilterOrder from "./FiltersOrder.jsx";
import ClearFilters from "./ClearFilters.jsx";
import FilterBrand from './FilterBrand';
import OrderByAlphabet from './OrderByAlphabet';

const Filters = ({ setActualPage }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      <div className="d-flex">
        <FilterCategory setActualPage={setActualPage} />
        <FilterGender />
        <FilterPrice />
        <FilterRating setActualPage={setActualPage} />
        {/* <FilterOrder /> */}
        <FilterPrice setActualPage={setActualPage}/>
        <FilterBrand />
        <ClearFilters />
        <OrderByAlphabet/>
        
      </div>
    </div>
  );
};

export default Filters;
