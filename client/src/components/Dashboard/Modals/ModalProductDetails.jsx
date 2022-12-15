import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearProductsDetail } from '../../../redux/features/products/productsActions';



import Card from '../../CardsContainer/Card'
// import Create from '../../Create/Create'

const ModalProductDetails = (props) =>{
    
    const dispatch = useDispatch();
    
    
    const { productDetail} = useSelector((state) => state.products);

    

    const handlerOnClick = () => {
        dispatch(clearProductsDetail({}))
      }
    

return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="d-flex justify-content-center "
    >
      <Modal.Header className="header">
        <Modal.Title id="contained-modal-title-vcenter">
          Product Details
        </Modal.Title>
      </Modal.Header>
      
        <div className="d-flex ">
      <Modal.Body className="d-flex ">

        <Card 
            name={productDetail.name}
            brand={productDetail.brand}
            card_picture={productDetail.card_picture}
            price={productDetail.price}
            rating={productDetail.rating}
            />
      </Modal.Body>
        </div>


      <Modal.Footer>
        <Button onClick={() => handlerOnClick()}>Close</Button>
      </Modal.Footer>
    </Modal>
)
}

export default ModalProductDetails