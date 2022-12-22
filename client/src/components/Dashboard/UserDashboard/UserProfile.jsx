import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { putUserInformation } from "../../../redux/features/users/usersActions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserProfileForm from "./UserProfileForm";

function UserProfile() {
  const { userDashboard, user } = useSelector((state) => state.users); //user se usa para el _id // userDashboard es para las props

  const [change, setChange] = useState({
      username: userDashboard.username?userDashboard.username : "",
      email: userDashboard.email?userDashboard.email : "",
      phone: userDashboard.phone?userDashboard.phone : "",
      address: userDashboard.address?userDashboard.address : "",
      city: userDashboard.city?userDashboard.city : "",
      country:userDashboard.country?userDashboard.country : "",
      image:userDashboard.image?userDashboard.image : "",
      state:userDashboard.state?userDashboard.state : "",
    });

    console.log(change)

  const [disable, setDisable] = useState(false)

  const dispatch = useDispatch();

  // console.log(modify);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(putUserInformation(user, change));
    // dispatch(getUserDashboards(user))
    setDisable(false)
  };

  const handleChange = (e, name) => {
    console.log(e.target.name)
    setChange({
      ...change,
      [name]: e.target.value,
    });
  };

  
  console.log(userDashboard);
  console.log(user);

  return (
    <>
      <Form>
        
          <Form.Group className="d-flex">
            <Form.Label>User Name: </Form.Label>
            <Form.Control
              type="string"
              placeholder={userDashboard.username}
              defaultValue={change.username}
              onChange={(e) => handleChange(e, "username")}
              value = {change.username}
              disabled = {disable !== "username"}
            />
            <Button onClick={()=>setDisable('username')}>Mod</Button>
          </Form.Group>

          <Form.Group className="d-flex">
            <Form.Label>E-mail: </Form.Label>
            <Form.Control
              type="string"
              placeholder={change.username}
              defaultValue={change.email}
              onChange={(e) => handleChange(e, "email")}
              value = {change.email}
              disabled = {disable !== "email"}
            />
            {/* <Button onClick={()=>setDisable('email')}>Mod</Button> */}
          </Form.Group>

          <Form.Group className="d-flex">
            <Form.Label>Phone: </Form.Label>
            <Form.Control
              type="string"
              placeholder={change.phone}
              defaultValue= {change.phone}
              onChange={(e) => handleChange(e, "phone")}
              value = {change.phone}
              disabled = {disable !== "phone"}
            />
            <Button onClick={()=>setDisable('phone')}>Mod</Button>
          </Form.Group>

          <Form.Group className="d-flex">
            <Form.Label>Address: </Form.Label>
            <Form.Control
              type="string"
              placeholder={change.address}
              defaultValue={change.address}
              onChange={(e) => handleChange(e, "address")}
              value = {change.address}
              disabled = {disable !== "address"}
            />
            <Button onClick={()=>setDisable('address')}>Mod</Button>
          </Form.Group>

          <Form.Group className="d-flex">
            <Form.Label>Other: </Form.Label>
            <Form.Control
              type="string"
              placeholder= "Timbre 3 puerta amarilla"
              defaultValue={change.other}
              onChange={(e) => handleChange(e, "other")}
              value = {change.other}
              disabled = {disable !== "other"}
            />
            <Button onClick={()=>setDisable('other')}>Mod</Button>
          </Form.Group>

          <Form.Group className="d-flex">
            <Form.Label>City: </Form.Label>
            <Form.Control
              type="string"
              placeholder={change.city}
              defaultValue={change.city}
              onChange={(e) => handleChange(e, "city")}
              value = {change.city}
              disabled = {disable !== "city"}
            />
            <Button onClick={()=>setDisable('city')}>Mod</Button>
          </Form.Group>

          <Form.Group className="d-flex">
            <Form.Label>Country: </Form.Label>
            <Form.Control
              type="string"
              placeholder={change.country}
              defaultValue={change.country}
              onChange={(e) => handleChange(e, "country")}
              value = {change.country}
              disabled = {disable !== "country"}
            />
            <Button onClick={()=>setDisable('country')}>Mod</Button>
          </Form.Group>

          <Form.Group className="d-flex">
            <Form.Label>State: </Form.Label>
            <Form.Control
              type="string"
              placeholder={change.state}
              defaultValue={change.state}
              onChange={(e) => handleChange(e, "state")}
              value = {change.state}
              disabled = {disable !== "state"}
            />
            <Button onClick={()=>setDisable('state')}>Mod</Button>
          </Form.Group>

          <Form.Group className="d-flex" controlId="formGroupEmail">
            <Form.Label>Image: </Form.Label>
            <Form.Control
              type="string"
              placeholder={change.image}
              defaultValue={change.image}
              onChange={(e) => handleChange(e, "image")}
              value = {change.image}
              disabled = {disable !== "image"}
            />
            <Button onClick={()=>setDisable('image')}>Mod</Button>
          </Form.Group>

      </Form>
      <Button onClick={handleSubmitForm}>Save</Button>
    </>
  )
}

export default UserProfile;
