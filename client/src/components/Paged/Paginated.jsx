import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getCategories,
  getBrands,
  getRatings,
  getGenders,
} from "../../redux/features/products/productsActions";
import CardsContainer from "../CardsContainer/CardsContainer";
// import Filters from "../Filters/Filters";
import Pagination from "react-bootstrap/Pagination";
// import { Link } from "react-router-dom";
import FilterContainer from "../Filters/FilterContainer";


import "../../styles/filterContainer.css";
import '../../styles/paginado.css'

const Paginated = () => {
  const dispatch = useDispatch();
  const { products, filters, orders, search } = useSelector(
    (state) => state.products
  ); //cambiar nombre

  useEffect(() => {
    dispatch(getAllProducts(filters, orders, search));
    // dispatch(getCategories());
    // dispatch(getBrands());
    // dispatch(getRatings());
    // dispatch(getGenders());
  }, [dispatch, filters, orders, search]);
  // console.log(search);
  let pages = []; // el número de páginas de mi componente

  //logica de recorrido del páginado
  const slicedPaged = () => {
    if (actualPage <= 3) {
      const slice = pages.slice(0, 7);
      return slice;
    }
    if (actualPage > 3 && pages[actualPage + 3] !== undefined) {
      const slice = pages.slice(actualPage - 4, actualPage + 3);
      return slice;
    } else if (actualPage > 3 && pages[actualPage + 4] === undefined) {
      const slice = pages.slice(pages.length - 7, pages.length);
      return slice;
    }
  };

  //Paginado
  //states
  const [actualPage, setActualPage] = useState(1);
  // eslint-disable-next-line
  const [productsPerPage, setProductsPerPage] = useState(12);

  //función recorredora del paginado
  const currentPage = (numberpage) => {
    setActualPage(numberpage);
  };

  if (products.length > 0) {
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
      pages.push(i);
    }
  }

  const indexOfLastProduct = actualPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const productsSliced = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return products[0] !== "void" ? (
    <div>
      <div>
        {/* filters funciona pero no hace el paginado */}
        <div></div>
        {/* <Filters setActualPage={setActualPage} /> */}

        <div className="d-flex align-self-start filterMargin mb-5">
          <FilterContainer setActualPage={setActualPage} />
        </div>

        {products.length >= 1 ? (
          pages.length < 8 ? (
            <Pagination className="d-flex justify-content-center paginadoCustom">
              
              {actualPage !== 1 ? (
                <Pagination.Prev onClick={() => currentPage(actualPage - 1)} />
              ) : (
                <Pagination.Prev disabled />
              )}

              {pages.map((page) =>
                page === actualPage ? (
                  <Pagination.Item
                    key={page}
                    active
                    onClick={() => currentPage(page)}
                  >
                    {page}
                  </Pagination.Item>
                ) : (
                  <Pagination.Item key={page} onClick={() => currentPage(page)}>
                    {page}
                  </Pagination.Item>
                )
              )}
              {actualPage !== pages[pages.length - 1] ? (
                <Pagination.Next onClick={() => currentPage(actualPage + 1)} />
              ) : (
                <Pagination.Next disabled />
              )}
            </Pagination>
          ) : (
            <Pagination className="d-flex justify-content-center">
              {/* {First and Prev} */}
              {actualPage !== 1 ? (
                <>
                  <Pagination.First onClick={() => currentPage(1)} />
                  <Pagination.Prev
                    onClick={() => currentPage(actualPage - 1)}
                  />
                </>
              ) : (
                <>
                  <Pagination.First disabled />
                  <Pagination.Prev disabled />
                </>
              )}

              {/* {pages } */}
              {slicedPaged().map((page) =>
                page === actualPage ? (
                  <Pagination.Item
                    key={page}
                    active
                    onClick={() => currentPage(page)}
                  >
                    {page}
                  </Pagination.Item>
                ) : (
                  <Pagination.Item key={page} onClick={() => currentPage(page)}>
                    {page}
                  </Pagination.Item>
                )
              )}

              {/* {Next and Last}*/}
              {actualPage !== pages[pages.length - 1] ? (
                <>
                  <Pagination.Next
                    onClick={() => currentPage(actualPage + 1)}
                  />
                  <Pagination.Last
                    onClick={() => currentPage(pages[pages.length - 1])}
                  />
                </>
              ) : (
                <>
                  <Pagination.Next disabled />
                  <Pagination.Last disabled />
                </>
              )}
            </Pagination>
          )
        ) : (
          <></>
        )}
      </div>
      {/* <div className=" d-flex w-100 justify-content-end pe-3">
        <Link to={"/create"}>
          <button className="d- flex p-2 border border-none rounded border-primary">
            Add Product (Demo)
          </button>
        </Link>
      </div> */}
      {productsSliced.length > 0 ? (
        <div>
          <div className="d-flex flex-column">
            <CardsContainer productsSliced={productsSliced} />
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ "min-height": "70vh" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
            alt="not found"
            style={{ width: "200px", height: "220px" }}
          />
          <div
            className="d-flex flex-wrap align-items-center text-center"
            style={{ width: "300px", color: "#d62828", "font-weight": "bold" }}
          >
            <label style={{ "font-weight": "bold", "font-size": "20px" }}>
              Sorry, this product is not available in our stock
            </label>
          </div>
        </div>
      )}
      {/* <Pagination className="d-flex justify-content-center mt-3">
              {actualPage !== 1 ? (
                <Pagination.Prev onClick={() => currentPage(actualPage - 1)} />
              ) : (
                <Pagination.Prev disabled />
              )}

              {pages.map((page) =>
                page === actualPage ? (
                  <Pagination.Item
                    key={page}
                    active
                    onClick={() => currentPage(page)}
                  >
                    {page}
                  </Pagination.Item>
                ) : (
                  <Pagination.Item key={page} onClick={() => currentPage(page)}>
                    {page}
                  </Pagination.Item>
                )
              )}
              {actualPage !== pages[pages.length - 1] ? (
                <Pagination.Next onClick={() => currentPage(actualPage + 1)} />
              ) : (
                <Pagination.Next disabled />
              )}
            </Pagination>
          ) : ( */}
      <Pagination className="d-flex justify-content-center">
        {/* {First and Prev} */}
        {actualPage !== 1 ? (
          <>
            <Pagination.First onClick={() => currentPage(1)} />
            <Pagination.Prev onClick={() => currentPage(actualPage - 1)} />
          </>
        ) : (
          <>
            <Pagination.First disabled />
            <Pagination.Prev disabled />
          </>
        )}

        {/* {pages } */}
        {slicedPaged().map((page) =>
          page === actualPage ? (
            <Pagination.Item
              key={page}
              active
              onClick={() => currentPage(page)}
            >
              {page}
            </Pagination.Item>
          ) : (
            <Pagination.Item key={page} onClick={() => currentPage(page)}>
              {page}
            </Pagination.Item>
          )
        )}

        {/* {Next and Last}*/}
        {actualPage !== pages[pages.length - 1] ? (
          <>
            <Pagination.Next onClick={() => currentPage(actualPage + 1)} />
            <Pagination.Last
              onClick={() => currentPage(pages[pages.length - 1])}
            />
          </>
        ) : (
          <>
            <Pagination.Next disabled />
            <Pagination.Last disabled />
          </>
        )}
      </Pagination>
      )
    </div>
  ) : (
    <div></div>
  );
};

export default Paginated;
