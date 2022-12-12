import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
    <>
      {user ? (
        <>
          <h1>Hello user</h1>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </>
      ) : (
        <>
          <p>You are not register</p>
        </>
      )}
    </>
  );
}
