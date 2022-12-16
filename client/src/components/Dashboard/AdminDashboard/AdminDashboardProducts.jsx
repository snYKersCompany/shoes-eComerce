import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import Filters from '../../Filters/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts, getProductsDetails } from '../../../redux/features/products/productsActions';
import "../../../styles/AdminDashboardProducts.css"
import {BiSearch} from 'react-icons/bi'
import {FiTrash} from 'react-icons/fi'
import { useState } from 'react';
import ModalProductDetails from "../Modals/ModalProductDetails" 
import ModalProductWarning from '../Modals/ModalProductsWarning';
// import Create from '../../Create/Create';
// import Modal from 'react-bootstrap/Modal';
// import Card from '../../CardsContainer/Card'

function AdminDashboardProducts() {
  const dispatch = useDispatch();
  const { products, filters, orders, productDetail} = useSelector((state) => state.products); //cambiar nombre
  const [warning, setWarning] = useState(false)

  useEffect(() => {
    dispatch(getAllProducts(filters, orders));
  }, [dispatch, filters, orders]);


  function setActualPage (n){}

  const handlerDetails = (_id)=>{
    dispatch(getProductsDetails(_id))

    setModalShow(true)
  }
 
//Modal
const [modalShow, setModalShow] = useState(false);

const handlerDelete = (id) => {
  setWarning(id)
}





//Fin Modal

  return (
    <>
    <Filters setActualPage = {setActualPage} className="customFilter"/>
    <Button variant="primary">Add Products</Button>
    
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>_id</th>
          <th>Brand</th>
          <th>Name</th>
          <th>Price</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => <tr key={product._id} 
        // onClick={()=>handlerDetails(product._id)}
        >
          <td>{product._id}</td>
          <td>{product.brand}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td> 
            <button className='p-1' onClick={()=>handlerDetails(product._id)}>
                <BiSearch/>
            </button>
          </td>

          <td> 
            <button className='p-1' onClick={()=>handlerDelete(product._id)}>
                <FiTrash/>
            </button>
          </td>

        </tr>)}
      </tbody>
      {/* {card} */}
      <ModalProductDetails
        show={Object.entries(productDetail).length}

      />

      {/* Warning  */}
      <ModalProductWarning
        show={warning}
        onHide={() => setWarning(false)}
      />


    </Table>
    </>
    
  );
}

export default AdminDashboardProducts;