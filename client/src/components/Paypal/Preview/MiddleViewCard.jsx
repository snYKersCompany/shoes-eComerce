import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../../../styles/MiddleViewCard.css";
import { Link } from "react-router-dom";

function MiddleViewCard() {
  const product = {
    _id: "6390b2bd95ee24ce5a09c667",
    sales: 0,
    name: "Air Jordan",
    brand: "Nike",
    card_picture:
      "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
    price: 53,
    has_stock: 3,
    range: 10.5,
  };

  return (
    <Container
      className="justify-content-md-center customContainer"
      key={product._id}
      style={{ width: "auto", padding: "0" }}
    >
      <Row style={{ width: "65em" }}>
        <Col className="d-flex obj1">
          <img src={product.card_picture} className="img1" alt={product.name} />
          <span>
            <h3 className="">You added to the cart</h3>
            <h5>{product.name}</h5>
          </span>
        </Col>
        <Col md="auto" className="d-flex obj2">
          <h5>
            {product.has_stock} products added in your cart: {product.price}$
          </h5>
          <img src={product.card_picture} className="img2" alt={product.name} />
        </Col>
        <Col xs lg="2" md="auto" className="d-flex obj3">
          <Link to="/cart">
            <Button variant="secondary customBtn">Go Cart</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default MiddleViewCard;
