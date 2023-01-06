import React, { useEffect } from "react";
import FilterContainer from "../../Filters/FilterContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductsDetails,
} from "../../../redux/features/products/productsActions";
import { FaTrash } from "react-icons/fa";
import { RiSearchFill } from "react-icons/ri";
import { useState } from "react";
import ModalProductDetails from "./Modals/ModalProductDetails";
import ModalProductWarning from "./Modals/ModalProductsWarning";
import ModalFormCreate from "./Modals/ModalFormCreate";
import "../../../styles/AdminDashboardProducts.css";

function AdminDashboardProducts() {
  const dispatch = useDispatch();
  const { products, filters, orders, productDetail } = useSelector(
    (state) => state.products
  );
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts(filters, orders));
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

  return (
    <div className="AdminProducts-gridContainer text-white">
      <div className="AdminProducts-create ">
        <ModalFormCreate />
      </div>

      <div className="AdminProducts-filters ">
        <FilterContainer
          setActualPage={setActualPage}
          className="customFilter"
        />
      </div>

      {products.map((product, i) => (
        <div className="AdminProducts-containerCard" key={i}>
          <div className="AdminProducts-product">
            <div className="productAdmin-img">
              <img
                src={product.card_picture}
                alt={product.name}
                className="productAdmin-img-inside"
                // width={"180px"}
              />
            </div>

            <div className="productAdmin-id">
              <p>{product._id}</p>
            </div>

            <div className="productAdmin-brand">
              <h5>{product.brand}</h5>
              <p>{product.name}</p>
            </div>

            <div className="productAdmin-price">
              <p>${product.price}</p>
            </div>

            <div className="productAdmin-btns">
              <button
                className="productAdmin-btn1"
                onClick={() => handlerDetails(product._id)}
              >
                {/* <BiSearch /> */}
                <RiSearchFill />
              </button>

              <button
                className="productAdmin-btn2"
                onClick={() => handlerDelete(product._id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* {card} */}
      <ModalProductDetails show={Object.entries(productDetail).length} />

      {/* Warning  */}
      <ModalProductWarning show={warning} onHide={() => setWarning(false)} />
    </div>
  );
}

export default AdminDashboardProducts;
