import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { userDashboard } = useSelector((state) => state.users);
  console.log("userdashboard en user", userDashboard);


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>User Name</th>
          <th>Mail</th>
          <th>Phone</th>
          <th>Roles</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        {
          <tr key={userDashboard._id}>
            <td>
              {userDashboard.name
                ? userDashboard.name
                : "complete name information"}
            </td>
            <td>
              {userDashboard.username
                ? userDashboard.username
                : userDashboard.name}
            </td>
            <td>
              {userDashboard.email
                ? userDashboard.email
                : "complete e-mail information"}
            </td>
            <td>
              {userDashboard.phone
                ? userDashboard.phone
                : "complete phone information"}
            </td>
            <td>{userDashboard.roles}</td>
            <td>{userDashboard.address}</td>
          </tr>
        }
      </tbody>
    </Table>
  );
};

export default UserProfile;
