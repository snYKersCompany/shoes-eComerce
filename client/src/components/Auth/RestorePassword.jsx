import React, { useState } from "react";
//BS
import Alert from "react-bootstrap/Alert";
import isotipo from "../../utils/images/isotipo.svg";

const RestorePassword = ({ message }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Email Sended!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
  return (
    <img
      display="inline-block"
      width="250px"
      height="250px"
      src={isotipo}
      alt="snykers"
    />
  );
};

export default RestorePassword;
