import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../../../styles/MiddleViewCard.css";

function MiddleViewCard({ product }) {
  return (
    <Container
      className="justify-content-md-center customContainer"
      key={product._id}
      style={{ width: "auto", padding: "0" }}
    >
      <Row style={{ width: "65em" }}>
        <Col className="d-flex obj1">
          <img src={product.img} className="img1" alt={product.name} />
          <span>
            <h5>{product.name}</h5>
          </span>
        </Col>
        <Col md="auto" className="d-flex obj2">
          <h5>
            {product.count} {product.name} product added to your cart:{" "}
            {product.totalPrice}$
          </h5>
        </Col>
        <Col xs lg="2" md="auto" className="d-flex obj3"></Col>
      </Row>
    </Container>
  );
}

export default MiddleViewCard;
