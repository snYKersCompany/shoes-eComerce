import React from "react";
import NavBar from "../NavBar/NavBar";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UserDashboard from "./UserDashboard/UserDashboard";
import "../../styles/userDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDashboards } from "../../redux/features/users/usersActions";

const Dashboard = () => {
  let userMONGO = { role: ["6397b0b5a0730c95052cae5a"] };

  //SI HAY USER ---> Verificacion de rol

  let user = { role: ["6397b0b5a0730c95052cae5a"] };
  const userId = "c400c15d-3fe8-4f1d-83f1-a7ce1915b69f";
  const dispatch = useDispatch();
  const { userDashboard } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUserDashboards(userId));
  }, [dispatch]);
  console.log(userDashboard);

  return (
    <>
      <NavBar />
      {userMONGO.role[0] === "6397b0b5a0730c95052cae5a" ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}
    </>
  );
};

export default Dashboard;
