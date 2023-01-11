import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//JSX
import FormUserUpdate from "./UpdateUser";
import NavBar from "../NavBar2.0/NavBar2.0";
//actions
import { getUserDashboards } from "../../redux/features/users/usersActions";
import { useAuth } from "../../context/authContext";
//


const Checkout = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getUserDashboards(user.uid));
  }, [user, dispatch]);

  return (
    <>
      <NavBar />
      <FormUserUpdate />
    </>
  );
};

export default Checkout;
