import React, { useState } from "react";
//BS
import Alert from "react-bootstrap/Alert";
// import isotipo from "../../utils/images/isotipo.svg";

const SuccessMSJ = ({ message }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Everything went right!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
  return <></>;
};

export default SuccessMSJ;
