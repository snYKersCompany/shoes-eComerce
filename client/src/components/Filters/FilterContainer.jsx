import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

//PARTE DE FILTERS

import FilterCategory from "./FilterCategory.jsx";
import FilterGender from "./FilterGender.jsx";
import FilterPrice from "./FilterPrice.jsx";
import FilterRating from "./FilterRating.jsx";
// import FilterOrder from "./FiltersOrder.jsx";
import ClearFilters from "./ClearFilters.jsx";
import FilterBrand from "./FilterBrand";
import OrderByAlphabet from "./OrderByAlphabet";
import '../../styles/filterContainer.css';



function FilterContainer({ setActualPage, name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <div>
      <Button variant='custom' onClick={handleShow} className="btnCard1">
        Filters
      </Button>
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>



          <div className="d-flex flex-column">

            <div className="d-flex flex-column">
              <div className="d-flex flex-column">
                <FilterCategory setActualPage={setActualPage} onClick={handleClose} />
                <FilterGender 
                onClick={handleClose}/>
                <FilterRating setActualPage={setActualPage}  onClick={handleClose}/>
                <FilterBrand 
                onClick={handleClose}/>
                {/* <ClearFilters 
                onClick={handleClose}/> */}
              </div>
              {/* <FilterOrder /> */}
              <div className="d-flex">
                <OrderByAlphabet 
                onClick={handleClose}/>
                <FilterPrice setActualPage={setActualPage} 
                onClick={handleClose}/>
              </div>

              <ClearFilters 
                onClick={handleClose}/>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// const Filters = ({ setActualPage }) => {
//   return (
//     <div className="d-flex justify-content-center flex-wrap">
//     <div className="d-flex flex-wrap">
//       <div className="d-flex">

//         <FilterCategory setActualPage={setActualPage} />
//         <FilterGender />
//         <FilterRating setActualPage={setActualPage} />
//         <FilterBrand />
//         <ClearFilters />
//       </div>
//       {/* <FilterOrder /> */}
//       <div className="d-flex">
//         <OrderByAlphabet/>
//         <FilterPrice setActualPage={setActualPage}/>
//       </div>
//       <Example />

//     </div>
//   </div>

//   );
// };

// function Example() {
//   return (
//     <>
//       {["start", "end", "top", "bottom"].map((placement, idx) => (
//         <FilterContainer key={idx} placement={'end'} name={placement} />
//       ))}
//     </>
//   );
// }

export default FilterContainer;
