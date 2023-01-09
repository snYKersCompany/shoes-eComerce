import React, { useEffect } from "react";
import NavBar from "../NavBar2.0/NavBar2.0";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UserDashboard from "./UserDashboard/UserDashboard";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDashboards,
  getOneUser,
} from "../../redux/features/users/usersActions";
import { useAuth } from "../../context/authContext";
import "../../styles/userDashboard.css";

const Dashboard = () => {
  const { userDashboard } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getUserDashboards(user.uid)); //peticion con el id que viene de useAuth
    dispatch(getOneUser(user.uid));
  }, [dispatch, user.uid]);

  return (
    <div className="Dashboard-container">
      {userDashboard ? (
        <>
          <div className="Dashboard-NavBar2">
            <NavBar />
          </div>
          {userDashboard.roles === "admin" ? (
            <AdminDashboard />
          ) : (
            <UserDashboard />
          )}
        </>
      ) : null}
    </div>
  );
};

export default Dashboard;
