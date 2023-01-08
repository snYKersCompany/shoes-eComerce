import React from "react";

const PaymentForm = ({
  userName,
  transactionId,
  moneyWasted,
  brand,
  purchase_status,
}) => {
  return (
    <div>
      <form>
        <label>User: {userName}</label>
        <br />
        <label>ID transaction: #{transactionId}</label>
        <br />
        <label>status: {purchase_status}</label>
        <br />
        <label>price: ${moneyWasted}</label>
        <br />
        <br />
        <label>thank you!</label>
        <br />
        <label> by {brand} team</label>
      </form>
    </div>
  );
};

export default PaymentForm;
