import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { putUserInformation } from "../../../redux/features/users/usersActions";


const UserProfileForm= ({setModify}) => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.users);

    const [change, setChange] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        city: "",
      });

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
    setModify();
    };

    const handleChange = (e) => {
    setChange({
        ...change,
        [e.target.name]: e.target.value,
    });
    };

    return(
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
    )
}

export default UserProfileForm;