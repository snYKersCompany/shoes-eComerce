import React, { useState } from "react";
//BS
import Alert from "react-bootstrap/Alert";
// import isotipo from "../../utils/images/isotipo.svg";

const AlertMSJ = ({ message }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading className="text-center">
          Oh snap! You got an error!
        </Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
  return <></>;
};

export default AlertMSJ;
