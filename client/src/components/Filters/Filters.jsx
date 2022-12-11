import React from "react";
import FilterCategory from "./FilterCategory.jsx";
import FilterGenre from "./FilterGenre.jsx";
import FilterPrice from "./FilterPrice.jsx";
import FilterRating from "./FilterRating.jsx";
import FilterOrder from "./FiltersOrder.jsx";

const Filters = ({ setActualPage }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex">
        <FilterCategory setActualPage={setActualPage} />
        <FilterGenre />
        <FilterPrice />
        <FilterRating setActualPage={setActualPage} />
        <FilterOrder />
      </div>
    </div>
  );
};

export default Filters;
