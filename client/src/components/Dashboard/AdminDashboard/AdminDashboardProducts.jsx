import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import FilterContainer from "../../Filters/FilterContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllProducts,
  getProductsDetails,
} from "../../../redux/features/products/productsActions";
import { BiSearch } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
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
      <div className="AdminProducts-filters">
        <FilterContainer setActualPage={setActualPage} className="customFilter" />
      </div>
      <div className="AdminProducts-create">
        <ModalFormCreate />
      </div>




          {products.map((product, i) => (

            <div className="AdminProducts-containerCard" key={i}>
            
              <div className="AdminProducts-product">

                <div className="productAdmin-img">
                  <img src={product.card_picture} alt={product.name} width={"200px"}  />
                </div>

                <div className="productAdmin-id">
                  <p>{product._id}</p>
                </div>

                <div className="productAdmin-brand">
                  <p>{product.brand}</p>
                </div>

                <div className="productAdmin-name">
                  <p>{product.name}</p>
                </div>

                <div className="productAdmin-price">
                  <p>${product.price}</p>
                </div>
                
                <div className="productAdmin-btn1">
                  <button
                    className="p-1"
                    onClick={() => handlerDetails(product._id)}
                  >
                    <BiSearch />
                  </button>
                </div>

                <div className="productAdmin-btn2">

                  <button
                    className="p-1"
                    onClick={() => handlerDelete(product._id)}
                    >
                    <FiTrash />
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
