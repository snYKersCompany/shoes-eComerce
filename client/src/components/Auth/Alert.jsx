import React from "react";
//BS
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const AlertMSJ = ({ message }) => {
  return (
    <>
      <Alert variant="danger" dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    </>
  );
};

export default AlertMSJ;
