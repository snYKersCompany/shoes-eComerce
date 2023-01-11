import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//JSX
import FormUserUpdate from "./UpdateUser";
import PaymentMethod from "./PaymentMethod";
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
      <h1>Checkout</h1>
      <FormUserUpdate />
      <PaymentMethod />
      buy
    </>
  );
};

export default Checkout;
