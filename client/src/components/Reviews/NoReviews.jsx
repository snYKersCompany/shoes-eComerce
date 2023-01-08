import Alert from "react-bootstrap/Alert";

const NoReviews = () => {

    
  return (
    <div>
          <Alert variant="success">
      <Alert.Heading>Sadly this product doesn't have any review yet...</Alert.Heading>

      <hr />
      <p className="mb-0">
        Only user who buy this products are able to write a review! 
      </p>
    </Alert>
    </div>

  );
};

export default NoReviews;
