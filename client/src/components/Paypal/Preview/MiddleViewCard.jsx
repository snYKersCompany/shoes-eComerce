import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../../../styles/MiddleViewCard.css";

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
          <img src={product.card_picture} className="img1" />
          <span>
            <h2>Agregaste a tu carrito</h2>
            <p>...Nombre... de talle ...Nro...</p>
          </span>
        </Col>
        <Col md="auto" className="d-flex obj2">
          <p>
            ...Nro... productos en tu carrito: <b>${product.price} * Nro</b>
          </p>
          <img src={product.card_picture} className="img2" />
        </Col>
        <Col xs lg="2" className="d-flex obj3">
          {/* <Button variant="primary btn">ver Carrito</Button>{' '} */}
          <Button variant="secondary customBtn">Ir al carrito</Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default MiddleViewCard;
