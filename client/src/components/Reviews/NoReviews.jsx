import Alert from "react-bootstrap/Alert";
import "./noReviews.css"

const NoReviews = () => {

    
  return (
    <div className="ContainerAlertContaierNotRev">
          <Alert variant="success">
      <Alert.Heading>
        <span className="headertittleNoRvws">
        Sadly this product doesn't have any review yet...
        </span>
        </Alert.Heading>

      <hr />
      <p className="mb-0">
        Only user who buy this products are able to write a review! 
      </p>
    </Alert>
    </div>

  );
};

export default NoReviews;
