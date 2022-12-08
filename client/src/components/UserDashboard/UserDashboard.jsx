import React, { useEffect } from "react";
import { useActionData, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "../";
import { useAuth } from "../../context/authContext";

export default function UserDashboard () {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state);
    
    useEffect(() => {
        // dispatch(getUser(id));
    }, [dispatch, id]);
  //   useEffect(() => {
  //     dispatch(getUser(id));
  //   }, [dispatch, id]);

  return (
    <div>
      <div>User Dashboard</div>
      <h4>{user.name}</h4>
    </div>
  );
}