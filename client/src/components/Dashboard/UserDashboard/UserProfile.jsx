import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getUserDashboards, putUserInformation } from "../../../redux/features/users/usersActions";
import "../../../styles/UserProfile.css"

function UserProfile() {
  const dispatch = useDispatch();

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
    
    const [disable, setDisable] = useState(false)   // Permite machear entre los distintos formulatios tomando el nombre de estos cada ves que se preciona el boton MOD

    const [state, setState] = useState(false)   // si hay cambios en cualquier formulario cambia de estado y muestra los botones SAVE y CANCEL

    const [error, setError] = useState({
      username: false,
      email: false,
      phone: false,
      address: false,
      other: false,
      city: false,
      country: false,
      state: false,
      image: false,
    })  //  si cambia a true significa que hay un error en su respectivo formulario
    
    console.log({nombre:error.nombre, usuario:error.usuario})
    
  // console.log(modify);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const formsFails = Object.entries(error).reduce((acc, curr) => curr[1]? acc = acc +" "+ curr[0]: acc ,"")
    console.log(formsFails)
    if(formsFails.length) alert("Errores en el/los formulario/s:"+formsFails.toLocaleUpperCase())
    else{
      dispatch(putUserInformation(user, change));
      // dispatch(getUserDashboards(user))
      setState(false)
      setDisable(false)
    } 
  };

  const handleChange = (e, name) => {
    setState(true)
    
    const regex = ({
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, //letras, numeros, guiones, y guionbajo
        username: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,    //letras y espacios pueden llevar acentos 
        email: /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$/,
        phone: /^\d{7,14}$/,
        address: /^[a-zA-Z0-9_-]{1,40}$/,
        other: /^[a-zA-Z0-9_-]{1,255}$/,
        city: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        state: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        image: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        // correo: /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$/, //formato email
        // telefono:  /^\d{7,14}$/ //de 7 a 14 numeros
      })
    setError({...error, [name]: !regex[name].test(e.target.value) })
    setChange({
      ...change,
      [name]: e.target.value,
    });
  };

  const handleCancel = (e)=>{
    e.preventDefault();
    
    dispatch(getUserDashboards(user))
    setState(false)
    setDisable(false)
  }
  
  const lockers = [
    {label:"User Name: ", form: "username", placeholder:"Only words", required:"Necesita"},
    {label:"E-mail: ", form: "email", placeholder:"fulano@gmail.com", required:"Necesita"},
    {label:"Phone: ", form: "phone", placeholder:"123456789", required:"Necesita"},
    {label:"Address: ", form: "address", placeholder:"av.siempreviva 742", required:"Necesita"},
    {label:"Other: ", form: "other", placeholder:"Timbre 3 puerta amarilla", required:"Necesita"},
    {label:"City: ", form: "city", placeholder:"Sidney", required:"Necesita"},
    {label:"Country: ", form: "country", placeholder:"Wakanda", required:"Necesita"},
    {label:"state: ", form: "state", placeholder:"California", required:"Necesita"},
    {label:"Image: ", form: "image", placeholder:"Hay que cambiar esto por una imagen", required:"Necesita"}
  ]

  // console.log(userDashboard)
  // console.log(change)
  // console.log(error)
  return (
    <>
      <Form>
        {lockers.map((f,idx)=><div key={idx}>
          <Form.Group className="d-flex" >
            <Form.Label>{f.label}</Form.Label>
            <Form.Control
              type="string"
              placeholder={f.placeholder}
              // defaultValue={change[f.form]}
              onChange={(e) => handleChange(e, f.form)}
              value = {change[f.form]}
              disabled = {disable !== f.form}
              className = {error[f.form]?"FormCreateError":""}
            />
            {f.form!=="email"?<Button onClick={()=>setDisable(f.form)}>Mod</Button>:null}
          </Form.Group>
          {error[f.form]?<p className="FormCreateError">{f.required}</p>:null}
        </div>)}

      </Form>
      {state ?<>
        <Button onClick={handleSubmitForm}>Save</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </>
      :null}
    </>
  )
}

export default UserProfile;









{/* <Form.Group className="d-flex">
          <Form.Label>User Name: </Form.Label>
          <Form.Control
            type="string"
            placeholder={userDashboard.username}
            defaultValue={change.username}
            onChange={(e) => handleChange(e, "username")}
            value = {change.username}
            disabled = {disable !== "username"}
            className = {error.username?"FormCreateError":""}
          />
          <Button onClick={()=>setDisable('username')}>Mod</Button>
        </Form.Group>
        <p>algo</p>
        <Form.Group className="d-flex">
          <Form.Label>E-mail: </Form.Label>
          <Form.Control
            type="string"
            placeholder={change.email}
            defaultValue={change.email}
            onChange={(e) => handleChange(e, "email")}
            value = {change.email}
            disabled = {disable !== "email"}
            className = {error.email?"FormCreateError":""}
          />
          <Button onClick={()=>setDisable('email')}>Mod</Button>
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
            className = {error.phone?"FormCreateError":""}
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
            className = {error.address?"FormCreateError":""}
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
            className = {error.other?"FormCreateError":""}
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
            className = {error.city?"FormCreateError":""}
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
            className = {error.country?"FormCreateError":""}
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
            className = {error.state?"FormCreateError":""}
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
            className = {error.image?"FormCreateError":""}
          />
          <Button onClick={()=>setDisable('image')}>Mod</Button>
        </Form.Group> */}