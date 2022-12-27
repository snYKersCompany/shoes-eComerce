import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAllUsers, putUserStatus, deleteUser } from "../../../redux/features/users/usersActions";

function AdminDashboardUsers() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handlerDeleteUser = (_id) => {
    // console.log(_id);
    dispatch(deleteUser(_id))
  };

  const handlerOrdersUser = (orders) => {
    console.log(orders);
  };

  const handleFormCheck = (payload) => {
    console.log('putUserStatus',payload.target.checked)
    // dispatch(putUserStatus(payload.target.checked))
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>_id</th>
          <th>User Name</th>
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
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>Number</td>
            <td>{user.address}</td>
            <td>{user.city}</td>
            {/* faltaria user.image */}
            <td>Imagen</td>
            <td>
              <Form.Check
                type="switch"
                id="custom-switch"
                onClick={(e) => handleFormCheck(e)}
              />
            </td>
            <td>
              <Button
                variant="primary"
                onClick={() => handlerDeleteUser(user._id)}
              >
                Delete
              </Button>{" "}
              <Button
                variant="secondary"
                onClick={() => handlerOrdersUser("Numero De Orden")}
              >
                Orders
              </Button>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AdminDashboardUsers;
