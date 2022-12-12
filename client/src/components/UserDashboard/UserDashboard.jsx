import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "../";
import { useAuth } from "../../context/authContext"; // eslint-disable-line

export default function UserDashboard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
    // dispatch(getUser(id));
  }, []);

  return (
    <div>
      <div>User Dashboard</div>
      {user}
    </div>
  );
}
