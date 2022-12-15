import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAllUsers } from '../../redux/features/users/usersActions';

function AdminDashboardUsers() {
    const dispatch = useDispatch()

    const { users } = useSelector(state=>state.users)

    useEffect(()=>{
        dispatch(getAllUsers())
    },[dispatch])
    console.log(users)

    const handlerDeleteUser = (_id)=>{
        console.log(_id)
    }

    const handlerOrdersUser = (orders)=>{
        console.log(orders)
    }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>_id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Number</th>
          <th>Adress</th>
          <th>City</th>
          <th>Image</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>Number</td>
            <td>{user.address}</td>
            <td>{user.city}</td>
            {/* user.image */}
            <td>Imagen</td>
            <td>
                <Form.Check 
                type="switch"
                id="custom-switch"
                onClick={e=>console.log(e.target.checked)}
                />
            </td>
            <td>
                <Button 
                variant="primary" 
                onClick={()=>handlerDeleteUser(user._id)}>
                    Delete
                </Button>{' '}
                <Button 
                variant="secondary"
                onClick={()=>handlerOrdersUser('Numero De Orden')}>
                    Orders
                </Button>{' '}
            </td>
        </tr>)}
      </tbody>
    </Table>
  );
}

export default AdminDashboardUsers;