import React from "react";
import NavBar from "../NavBar/NavBar";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UserDashboard from "./UserDashboard/UserDashboard";
import "../../styles/userDashboard.css";

const Dashboard = () => {
  let userMONGO = { role: ["6397b0b5a0730c95052cae5a"] };

  //SI HAY USER ---> Verificacion de rol

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
