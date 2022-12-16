import React from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUserById } from "../../../redux/features/users/usersActions";
import { useAuth } from "../../../context/authContext";

const UserProfile = () => {
  const dispatch = useDispatch();

  const { userDetail } = useSelector((state) => state.users);
  const { _id } = useParams();



  useEffect(() => {
    dispatch(getUserById(_id));
  }, [dispatch, _id]);
  
  return (
  <>
  {(!userDetail._id === _id) ? <div> LOADING </div> 
  : (<Table striped bordered hover>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>User Name</th>
          <th>Mail</th>
          <th>Phone</th>
          <th>Roles</th>
        </tr>
      </thead>
      <tbody>
        {userDetail &&
          userDetail.map((u) => (
            <tr key={u._id}>
            <td>{u.name}</td>
            <td>{u.username ? u.username : u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone ? u.phone : "complete phone information"}</td>
              <td>{u.roles[0] && u.roles}</td>
            </tr>
          ))}
      </tbody>
    </Table>)} 
    
    </>
  );
};

export default UserProfile;
