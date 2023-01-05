import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import FilterContainer from "../../Filters/FilterContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllProducts,
  getProductsDetails,
  getCategories,
  getBrands,
  getRatings,
  getGenders,
} from "../../../redux/features/products/productsActions";
import "../../../styles/AdminDashboardProducts.css";
import { BiSearch } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import { useState } from "react";
import ModalProductDetails from "./Modals/ModalProductDetails";
import ModalProductWarning from "./Modals/ModalProductsWarning";
import ModalFormCreate from "./Modals/ModalFormCreate";

function AdminDashboardProducts() {
  const dispatch = useDispatch();
  const { products, filters, orders, productDetail } = useSelector(
    (state) => state.products
  );
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts(filters, orders));
    dispatch(getCategories());
    dispatch(getBrands());
    dispatch(getRatings());
    dispatch(getGenders());
  }, [dispatch, filters, orders]);

  function setActualPage(n) {}

  const handlerDetails = (_id) => {
    dispatch(getProductsDetails(_id));

    setModalShow(true);
  };

  //Modal
  const [modalShow, setModalShow] = useState(false); // eslint-disable-line

  const handlerDelete = (id) => {
    setWarning(id);
  };

  //Fin Modal

  // useEffect(() => {
  //   dispatch(getAllProducts(filters, orders, search));
  //   dispatch(getCategories());
  //   dispatch(getBrands());
  //   dispatch(getRatings());
  //   dispatch(getGenders());
  // }, [dispatch, filters, orders, search]);

  return (
    <>
      <FilterContainer setActualPage={setActualPage} className="customFilter" />
      <ModalFormCreate />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Name</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, inx) => (
            <tr
              key={inx}
              // onClick={()=>handlerDetails(product._id)}
            >
              <td>{product._id}</td>
              <td>{product.brand}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button
                  className="p-1"
                  onClick={() => handlerDetails(product._id)}
                >
                  <BiSearch />
                </button>
              </td>

              <td>
                <button
                  className="p-1"
                  onClick={() => handlerDelete(product._id)}
                >
                  <FiTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {/* {card} */}
        <ModalProductDetails show={Object.entries(productDetail).length} />

        {/* Warning  */}
        <ModalProductWarning show={warning} onHide={() => setWarning(false)} />
      </Table>
    </>
  );
}

export default AdminDashboardProducts;
