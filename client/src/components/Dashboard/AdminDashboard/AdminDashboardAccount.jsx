import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getUserDashboards, putUserInformation } from "../../../redux/features/users/usersActions";
import "../../../styles/UserProfile.css"
import { useEffect } from "react";

function AdminDashboardAccount() {
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
      roles: false,
      image: false,
    })  //  si cambia a true significa que hay un error en su respectivo formulario
    
    useEffect(()=>{
      if(Object.entries(userDashboard).length) setChange({
        username: userDashboard.username?userDashboard.username : "",
        email: userDashboard.email?userDashboard.email : "",
        phone: userDashboard.phone?userDashboard.phone : "",
        address: userDashboard.address?userDashboard.address : "",
        city: userDashboard.city?userDashboard.city : "",
        country:userDashboard.country?userDashboard.country : "",
        roles:userDashboard.roles?userDashboard.roles : "",
        image:userDashboard.image?userDashboard.image : "",
        state:userDashboard.state?userDashboard.state : "",
      });
    },[userDashboard])
    
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
        // address: /^[a-zA-Z0-9_-]{1,40}$/,
        address: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        other: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        city: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        state: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        roles: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
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
    {label:"User Name: ", form: "username", placeholder:"Only words", required:"Nesesita"},
    {label:"E-mail: ", form: "email", placeholder:"fulano@gmail.com", required:"Nesesita"},
    {label:"Phone: ", form: "phone", placeholder:"123456789", required:"Nesesita"},
    {label:"Address: ", form: "address", placeholder:"av.siempreviva 742", required:"Nesesita"},
    {label:"Other: ", form: "other", placeholder:"Timbre 3 puerta amarilla", required:"Nesesita"},
    {label:"City: ", form: "city", placeholder:"Sidney", required:"Nesesita"},
    {label:"Country: ", form: "country", placeholder:"Wakanda", required:"Nesesita"},
    {label:"State: ", form: "state", placeholder:"California", required:"Nesesita"},
    {label:"Roles: ", form: "roles", placeholder:"Admin", required:"Nesesita"},
    {label:"Image: ", form: "image", placeholder:"Hay que cambiar esto por una imagen", required:"Nesesita"}
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
              defaultValue={change[f.form]}
              onChange={(e) => handleChange(e, f.form)}
              // value = {change[f.form]}
              disabled = {disable !== f.form}
              className = {error[f.form]?"FormCreateError":""}
            />
            {f.form!=="email" && f.form!=="roles"?<Button onClick={()=>setDisable(f.form)}>Mod</Button>:null}
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

export default AdminDashboardAccount;


{/* <Form.Group className="mb-3" controlId="formGroupRol">
          <Form.Label>Rol: </Form.Label>
          <Form.Control
            type="password"
            placeholder={userDashboard.roles?userDashboard.roles.name:null}
            disabled
          />
        </Form.Group> */}


// import React from "react";
// import Table from "react-bootstrap/Table";
// import { useSelector } from "react-redux";

// const UserProfile = () => {
//   const { userDashboard } = useSelector((state) => state.users);

//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Full Name</th>
//           <th>User Name</th>
//           <th>Mail</th>
//           <th>Phone</th>
//           <th>Roles</th>
//           <th>Address</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           <tr key={userDashboard._id}>
//             <td>
//               {userDashboard.name
//                 ? userDashboard.name
//                 : "complete name information"}
//             </td>
//             <td>
//               {userDashboard.username
//                 ? userDashboard.username
//                 : userDashboard.name}
//             </td>
//             <td>
//               {userDashboard.email
//                 ? userDashboard.email
//                 : "complete e-mail information"}
//             </td>
//             <td>
//               {userDashboard.phone
//                 ? userDashboard.phone
//                 : "complete phone information"}
//             </td>
//             <td>{userDashboard.roles && userDashboard.roles}</td>
//             <td>{userDashboard.address}</td>
//           </tr>
//         }
//       </tbody>
//     </Table>
//   );
// };

// export default UserProfile;
