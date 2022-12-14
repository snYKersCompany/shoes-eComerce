import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import Filters from '../Filters/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../redux/features/products/productsActions';
import "../../styles/AdminDashboardProducts.css"

function AdminDashboardProducts() {
  const dispatch = useDispatch();
  const { products, filters, orders } = useSelector((state) => state.products); //cambiar nombre

  useEffect(() => {
    dispatch(getAllProducts(filters, orders));
  }, [dispatch, filters, orders]);

  console.log(products)

  function setActualPage (n){}

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>_id</th>
          <th>Name</th>
          <th className='container'>
            <div className='d-flex'>
            <Filters setActualPage = {setActualPage} className="customFilter"/>
            <Button variant="primary">Add Products</Button>
            </div>
            <div className='displayDetails'><p>Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product Componente Product </p></div>
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => <tr key={product._id}>
          <td>{product._id}</td>
          <td>{product.name}</td>
        </tr>)}
      </tbody>
    </Table>
  );
}

export default AdminDashboardProducts;