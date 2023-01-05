import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardSearch from "../DashboardSearch";
import ModalUsersWarning from "./Modals/ModalUsersWarning";
import {
  getAllUsers,
  putUserStatus,
} from "../../../redux/features/users/usersActions";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function AdminDashboardUsers() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const [warning, setWarning] = useState(false);

  const [orderUser, setOrderUser] = useState("");
  const [valueOrder, setValueOrder] = useState(-1);
  const [directionOrder, setDirectionOrder] = useState("↑↓");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const orderSearch = {};
    if (orderUser.length) orderSearch.orderBy = { [orderUser]: valueOrder };
    if (search.length) orderSearch.search = search;
    dispatch(getAllUsers(orderSearch));
  }, [dispatch, orderUser, valueOrder, search]);

  const handleFormCheck = ({ target }, _id) => {
    dispatch(putUserStatus(_id, { status: target.checked }));
  };

  const handleFormAdmin = ({ target }, _id) => {
    let roles = "";
    if (target.checked) roles = "admin";
    else roles = "user";
    dispatch(putUserStatus(_id, { roles: [roles] }));
  };

  const handlerOrder = (column) => {
    setOrderUser(column);
    setValueOrder(valueOrder * -1);
    if (valueOrder > 0) setDirectionOrder("↑");
    else setDirectionOrder("↓");
  };

  return (
    <div>
      <DashboardSearch
        type="users"
        search={search}
        setSearch={(a) => setSearch(a)}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>_id</th>
            <th onClick={() => handlerOrder("username")}>
              User Name {orderUser === "username" ? directionOrder : ""}
            </th>
            <th onClick={() => handlerOrder("email")}>
              Email {orderUser === "email" ? directionOrder : ""}
            </th>
            <th onClick={() => handlerOrder("phone")}>
              Phone {orderUser === "phone" ? directionOrder : ""}
            </th>
            {/* <th onClick={()=>handlerOrder("number")}>Number {orderUser==="number"?directionOrder:""}</th> */}
            <th onClick={() => handlerOrder("address")}>
              Address {orderUser === "address" ? directionOrder : ""}
            </th>
            <th onClick={() => handlerOrder("city")}>
              City {orderUser === "city" ? directionOrder : ""}
            </th>
            <th onClick={() => handlerOrder("country")}>
              Country {orderUser === "country" ? directionOrder : ""}
            </th>
            <th>Image</th>
            <th>Status</th>
            <th>User/Admin</th>
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
              <td>{user.address}</td>
              <td>{user.city}</td>
              <td>{user.country}</td>
              {/* faltaria user.image */}
              <td>
                <img src={user.image} alt={user.name} height="70" width="70" />
              </td>
              <td>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  defaultChecked={user.status}
                  onClick={(e) => handleFormCheck(e, user._id)}
                />
              </td>
              <td>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  defaultChecked={user.roles[0] === "admin"}
                  onClick={(e) => handleFormAdmin(e, user._id)}
                />
              </td>
              <td>
                <Button variant="primary" onClick={() => setWarning(user._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>

        <ModalUsersWarning
          show={warning}
          onHide={() => setWarning(false)}
          order={{ [orderUser]: valueOrder }}
          search={search}
        />
      </Table>
    </div>
  );
}

export default AdminDashboardUsers;
