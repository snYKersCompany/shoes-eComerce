import React from "react";

import NavBar from "../NavBar/NavBar";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UserDashboard from "./UserDashboard/UserDashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  getUserDashboards,
  getOneUser,
} from "../../redux/features/users/usersActions";
import { useAuth } from "../../context/authContext";
import "../../styles/userDashboard.css";

const Dashboard = () => {
  const { userDashboard } = useSelector((state) => state.users);
  //SI HAY USER ---> Verificacion de rol

  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getUserDashboards(user.uid)); //peticion con el id que viene de useAuth
    dispatch(getOneUser(user.uid));
  }, [dispatch, user.uid]);

  return (
    <>
      <NavBar />
      {userDashboard.roles === "admin" ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}
    </>
  );
};

export default Dashboard;
