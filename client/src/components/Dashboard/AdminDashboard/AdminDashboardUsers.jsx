import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardSearch from "../DashboardSearch";
import ModalUsersWarning from "./Modals/ModalUsersWarning";
import {
  getAllUsers,
  putUserStatus,
} from "../../../redux/features/users/usersActions";
import { FaTrash, FaUserSlash, FaUser } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import "../../../styles/AdminDashboardUsers.css"
function AdminDashboardUsers() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [warning, setWarning] = useState(false);
  const [orderUser, setOrderUser] = useState(""); // eslint-disable-line
  const [valueOrder, setValueOrder] = useState(-1); // eslint-disable-line  
  // const [directionOrder, setDirectionOrder] = useState("↑↓");
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

  // const handlerOrder = (column) => {
  //   setOrderUser(column);
  //   setValueOrder(valueOrder * -1);
  //   if (valueOrder > 0) setDirectionOrder("↑");
  //   else setDirectionOrder("↓");
  // };

  return (
    <div className="AdminDshbUsers-grid">
      <div className="AdminDshbUsers-search">
        <DashboardSearch
          type="users"
          search={search}
          setSearch={(a) => setSearch(a)}
        />        
          {users.map((user,i) => (
        <div className="AdminDshbUsers-userContainer" key={i}>
          <div className="AdminDshbUsers-userGrid">

            
            <div className="cardUser-avatar">
              <img src={user.image} alt={user.name}  />
            </div>
            <div className="cardUser-info">
              <p className="cardUser-username">{user.username}</p>
              <p className="cardUser-idUser">{user._id}</p>
              <p className="cardUser-auxInfo">{user.email}</p>
              <p className="cardUser-auxInfo">{user.phone}</p>
              {/* <p className="cardUser-auxInfo">{user.address}</p> */}
              <p className="cardUser-auxInfo">{user.city}</p>
              <p className="cardUser-countryuser">
                {user.country}-{user.city}
              </p>
            </div>

            <div className="cardUser-switchs">
              <label className="cardUser-switchs-label">status</label>

              <label className="switch">
                <input
                  type="checkbox"
                  defaultChecked={user.status}
                  onClick={(e) => handleFormCheck(e, user._id)}
                />

                <span className="slider round"></span>
              </label>

              <label className="cardUser-switchs-label">Role</label>

              <label className="switch">
                <input
                  type="checkbox"
                  defaultChecked={user.roles[0] === "admin"}
                  onClick={(e) => handleFormAdmin(e, user._id)}
                />

                <span className="slider round"></span>
              </label>
            </div>

            <div className="cardUser-delete">
              <button
                className="cardUser-btn"
                onClick={() => setWarning(user._id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}

      <ModalUsersWarning
        show={warning}
        onHide={() => setWarning(false)}
        order={{ [orderUser]: valueOrder }}
        search={search}
      />
              <p className="cardUser-countryuser">{user.country}-{user.city}</p>
            </div>

              <div className="cardUser-switchs">


                  <label className="cardUser-switchs-label">status</label>
                  
                  <label className="switch">
                    <input type="checkbox"
                    defaultChecked={user.status}
                    onClick={(e) => handleFormCheck(e, user._id)} 
                    />

                    <span className="slider round"></span>
                  </label>


                  <label className="cardUser-switchs-label">Role</label>

                  <label className="switch">
                  <input type="checkbox"
                  defaultChecked={user.roles[0] === "admin"}
                  onClick={(e) => handleFormAdmin(e, user._id)}
                  />

                  <span className="slider round"></span>
                  </label>

              </div>

              <div className="cardUser-delete">
                <button className="cardUser-btn" onClick={() => setWarning(user._id)}>
                  <FaTrash />
                </button>
              </div>
            </div>

            </div>
          ))}

        <ModalUsersWarning
          show={warning}
          onHide={() => setWarning(false)}
          order={{ [orderUser]: valueOrder }}
          search={search}
        />
    </div>
  );
}

export default AdminDashboardUsers;
// return (
//   <div>

//     <div className="AdminDshbUsers-search">
//       <DashboardSearch
//         type="users"
//         search={search}
//         setSearch={(a) => setSearch(a)}
//         />
//     </div>
//      <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>_id</th>
//           <th onClick={() => handlerOrder("username")}>
//             User Name {orderUser === "username" ? directionOrder : ""}
//           </th>
//           <th onClick={() => handlerOrder("email")}>
//             Email {orderUser === "email" ? directionOrder : ""}
//           </th>
//           <th onClick={() => handlerOrder("phone")}>
//             Phone {orderUser === "phone" ? directionOrder : ""}
//           </th>
//           {/* <th onClick={()=>handlerOrder("number")}>Number {orderUser==="number"?directionOrder:""}</th> */}
//           <th onClick={() => handlerOrder("address")}>
//             Address {orderUser === "address" ? directionOrder : ""}
//           </th>
//           <th onClick={() => handlerOrder("city")}>
//             City {orderUser === "city" ? directionOrder : ""}
//           </th>
//           <th onClick={() => handlerOrder("country")}>
//             Country {orderUser === "country" ? directionOrder : ""}
//           </th>
//           <th>Image</th>
//           <th>Status</th>
//           <th>User/Admin</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user._id}>
//             <td>{user._id}</td>
//             <td>{user.username}</td>
//             <td>{user.email}</td>
//             <td>{user.phone}</td>
//             <td>{user.address}</td>
//             <td>{user.city}</td>
//             <td>{user.country}</td>
//             {/* faltaria user.image */}
//             <td>
//               <img src={user.image} alt={user.name} height="70" width="70" />
//             </td>
//             <td>
//               <Form.Check
//                 type="switch"
//                 id="custom-switch"
//                 defaultChecked={user.status}
//                 onClick={(e) => handleFormCheck(e, user._id)}
//               />
//             </td>
//             <td>
//               <Form.Check
//                 type="switch"
//                 id="custom-switch"
//                 defaultChecked={user.roles[0] === "admin"}
//                 onClick={(e) => handleFormAdmin(e, user._id)}
//               />
//             </td>
//             <td>
//               <Button variant="primary" onClick={() => setWarning(user._id)}>
//                 Delete
//               </Button>
//             </td>
//           </tr>
//         ))}
//       </tbody>

//       <ModalUsersWarning
//         show={warning}
//         onHide={() => setWarning(false)}
//         order={{ [orderUser]: valueOrder }}
//         search={search}
//       />
//     </Table>
//   </div>
// );
// }

// }