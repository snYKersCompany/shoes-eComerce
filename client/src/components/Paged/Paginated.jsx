import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/features/products/productsActions";
import CardsContainer from "../CardsContainer/CardsContainer";
import Filters from "../Filters/Filters";
import Pagination from "react-bootstrap/Pagination";


const Paginated = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products); //cambiar nombre
  const { filters } = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(getAllProducts(filters));
  }, [dispatch, filters]);

  let pages = []; // el número de páginas de mi componente



  //logica de recorrido del páginado
  const slicedPaged = () => {
    if (actualPage <= 3) {
      const slice = pages.slice(0, 7);
      return slice;
    }
    if (actualPage >3 && pages[actualPage + 3] !== undefined) {
      const slice = pages.slice(actualPage - 4, actualPage + 3);
      console.log(slice +"2")
      return slice;

    } else if (actualPage > 3 && pages[actualPage + 4] === undefined) {
      const slice = pages.slice(pages.length - 7, pages.length);
      console.log(slice +"3")
      return slice;
    }
  };

  //Paginado
  //states
  const [actualPage, setActualPage] = useState(1);
  // eslint-disable-next-line
  const [productsPerPage, setProductsPerPage] = useState(9);

  //función recorredora del paginado
  const currentPage = (numberpage) => {
    setActualPage(numberpage);
  };


  if (products.length > 0) {
    for (let i = 1; i <= Math.ceil(products.length / 7); i++) {
      pages.push(i);
    }
  }
  
  const indexOfLastProduct = actualPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const productsSliced = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
console.log(pages)
  return (
    <div>
      <div>
        {/* filters funciona pero no hace el paginado */}
        <Filters setActualPage={setActualPage} /> 
        {products.length > 1 ? (
          pages.length < 8 ? (
            <Pagination className="d-flex justify-content-center mt-3">
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
            <Pagination className="d-flex justify-content-center mt-3">
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
      <CardsContainer productsSliced={productsSliced} />
    </div>
  );
};

export default Paginated;
