import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { putUserInformation } from "../../../redux/features/users/usersActions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function UserProfile() {
  const { userDashboard, user } = useSelector((state) => state.users); //user se usa para el _id // userDashboard es para las props
  const [modify, setModify] = useState(false);


  const [change, setChange] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const dispatch = useDispatch();

  const handleShowForm = () => {
    setModify(true);
  };

  // console.log(modify);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(putUserInformation(user, change));
    // dispatch(getUserDashboards(user))
    setChange({
      name: "",
      username: "",
      email: "",
      phone: "",
      address: "",
      city: "",
    });
    setModify(false);
  };

  const handleChange = (e) => {
    setChange({
      ...change,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(change);

  return modify === false ? (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Full name: </Form.Label>
          <Form.Control
            type="email"
            placeholder={userDashboard.name}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupUserName">
          <Form.Label>User name: </Form.Label>
          <Form.Control
            type="password"
            placeholder={userDashboard.username}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupMail">
          <Form.Label>E-mail: </Form.Label>
          <Form.Control
            type="password"
            placeholder={userDashboard.email}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="password"
            placeholder={userDashboard.phone}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAddress">
          <Form.Label>Address: </Form.Label>
          <Form.Control
            type="password"
            placeholder={userDashboard.address}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupCity">
          <Form.Label>city: </Form.Label>
          <Form.Control
            type="password"
            placeholder={userDashboard.city}
            disabled
          />
        </Form.Group>
      </Form>
      <Button onClick={handleShowForm}>Modify</Button>
    </>
  ) : (
    <Form onSubmit={(e) => handleSubmitForm(e)}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label> New Name</Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter new name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label> New user name</Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter new user name"
            name="username"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label> New Email</Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter new email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label> New Phone</Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter new phone"
            name="phone"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>New Address</Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter new address"
            name="address"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>New City</Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter new city"
            name="city"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="danger" onClick={()=>setModify(false)}>Cancel</Button>
    </Form>
  );
}

export default UserProfile;
