import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardSearch from "../DashboardSearch";
import ModalUsersWarning from "./Modals/ModalUsersWarning";
import {
  getAllUsers,
  putUserStatus,
} from "../../../redux/features/users/usersActions";
import { putUserSuspended } from "../../../redux/features/nodemailer/nodeMailerActions";
import { FaTrash } from "react-icons/fa";
import "../../../styles/AdminDashboardUsers.css";

function AdminDashboardUsers() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [warning, setWarning] = useState(false);

  const [orderUser, setOrderUser] = useState(""); // eslint-disable-line
  const [valueOrder, setValueOrder] = useState(-1); // eslint-disable-line
  // const [directionOrder, setDirectionOrder] = useState("↑↓");
  const [search, setSearch] = useState("");
  const [localEmail, setLocalEmail] = useState("");

  useEffect(() => {
    const orderSearch = {};
    if (orderUser.length) orderSearch.orderBy = { [orderUser]: valueOrder };
    if (search.length) orderSearch.search = search;
    dispatch(getAllUsers(orderSearch));
  }, [dispatch, orderUser, valueOrder, search]);

  const handleFormCheck = ({ target }, _id, email) => {
    dispatch(putUserStatus(_id, { status: target.checked }));
    if (!target.checked) {
      dispatch(putUserSuspended(email));
    }
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

  const handleSendEmail = (user) => {
    setWarning(user._id);
    setLocalEmail(user.email);
  };

  return (
    <div className="AdminDshbUsers-grid">
      <div className="AdminDshbUsers-search">
        <DashboardSearch
          type="users"
          search={search}
          setSearch={(a) => setSearch(a)}
        />
      </div>

      {users.map((user, i) => (
        <div className="AdminDshbUsers-userContainer" key={i}>
          <div className="AdminDshbUsers-userGrid">
            <div className="cardUser-avatar">
              <img src={user.image} alt={user.name} />
            </div>

            <div className="cardUser-info">
              <p className="cardUser-username">{user.username}</p>
              <p className="cardUser-idUser">{user._id}</p>
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
    </div>
  );
}

export default AdminDashboardUsers;
