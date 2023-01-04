import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import {
  getUserDashboards,
  putUserInformation,
} from "../../../redux/features/users/usersActions";
import { FiEdit3 } from "react-icons/fi";
import "../../../styles/UserProfile.css";

function AdminDashboardAccount() {
  const dispatch = useDispatch();

  const { userDashboard, user } = useSelector((state) => state.users); //user se usa para el _id // userDashboard es para las props

  const [change, setChange] = useState({
    username: userDashboard.username ? userDashboard.username : "",
    // email: userDashboard.email ? userDashboard.email : "",
    phone: userDashboard.phone ? userDashboard.phone : "",
    address: userDashboard.address ? userDashboard.address : "",
    city: userDashboard.city ? userDashboard.city : "",
    country: userDashboard.country ? userDashboard.country : "",
    image: userDashboard.image ? userDashboard.image : "",
    state: userDashboard.state ? userDashboard.state : "",
  });

  const [disable, setDisable] = useState(false); // Permite machear entre los distintos formulatios tomando el nombre de estos cada ves que se preciona el boton MOD

  const [state, setState] = useState(false); // si hay cambios en cualquier formulario cambia de estado y muestra los botones SAVE y CANCEL

  const [error, setError] = useState({
    username: false,
    // email: false,
    phone: false,
    address: false,
    // other: false,
    city: false,
    country: false,
    state: false,
    // roles: false,
    image: false,
  }); //  si cambia a true significa que hay un error en su respectivo formulario

  useEffect(() => {
    if (Object.entries(userDashboard).length)
      setChange({
        username: userDashboard.username ? userDashboard.username : "",
        // email: userDashboard.email ? userDashboard.email : "",
        phone: userDashboard.phone ? userDashboard.phone : "",
        address: userDashboard.address ? userDashboard.address : "",
        city: userDashboard.city ? userDashboard.city : "",
        country: userDashboard.country ? userDashboard.country : "",
        // roles: userDashboard.roles ? userDashboard.roles : "",
        image: userDashboard.image ? userDashboard.image : "",
        state: userDashboard.state ? userDashboard.state : "",
      });
  }, [userDashboard]);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const formsFails = Object.entries(error).reduce(
      (acc, curr) => (curr[1] ? (acc = acc + " " + curr[0]) : acc),
      ""
    );

    if (formsFails.length)
      alert("Errores en el/los formulario/s:" + formsFails.toLocaleUpperCase());
    else {
      dispatch(putUserInformation(user, change));
      setState(false);
      setDisable(false);
    }
  };

  const handleChange = (e, name) => {
    setState(true);

    const regex = {
      usuario: /^[a-zA-Z0-9_-]{4,16}$/, //letras, numeros, guiones, y guionbajo
      username: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios pueden llevar acentos
      // email: /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$/,
      phone: /^\d{7,14}$/,
      // address: /^[a-zA-Z0-9_-]{1,40}$/,
      address: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      // other: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      city: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      state: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      // roles: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      image: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      // correo: /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$/, //formato email
      // telefono:  /^\d{7,14}$/ //de 7 a 14 numeros
    };
    setError({ ...error, [name]: !regex[name].test(e.target.value) });
    setChange({
      ...change,
      [name]: e.target.value,
    });
  };

  const handleCancel = (e) => {
    e.preventDefault();

    dispatch(getUserDashboards(user));
    setState(false);
    setDisable(false);
  };

  const handleEdit = (e, form) => {
    e.preventDefault();
    setDisable(form);
  };

  const lockers = [
    {
      label: "User Name: ",
      form: "username",
      placeholder: "Only words",
      required: "Nesesita",
    },
    // {
    //   label: "E-mail: ",
    //   form: "email",
    //   placeholder: "fulano@gmail.com",
    //   required: "Nesesita",
    // },
    {
      label: "Phone: ",
      form: "phone",
      placeholder: "123456789",
      required: "Nesesita",
    },
    {
      label: "Address: ",
      form: "address",
      placeholder: "av.siempreviva 742",
      required: "Nesesita",
    },
    // {
    //   label: "Other: ",
    //   form: "other",
    //   placeholder: "Timbre 3 puerta amarilla",
    //   required: "Nesesita",
    // },
    {
      label: "City: ",
      form: "city",
      placeholder: "Sidney",
      required: "Nesesita",
    },
    {
      label: "Country: ",
      form: "country",
      placeholder: "Wakanda",
      required: "Nesesita",
    },
    {
      label: "State: ",
      form: "state",
      placeholder: "California",
      required: "Nesesita",
    },
    // {
    //   label: "Roles: ",
    //   form: "roles",
    //   placeholder: "Admin",
    //   required: "Nesesita",
    // },
    {
      label: "Image: ",
      form: "image",
      placeholder: "Hay que cambiar esto por una imagen",
      required: "Nesesita",
    },
  ];

  return (
    <div className="AdminAccount-container">
      <div className="AdminAccount-background">
        <img
          src="https://media.discordapp.net/attachments/978746970460012584/1059462550363848794/snykers_bg.png?width=994&height=559"
          alt="name"
          className="AdminAccount-background-img"
        />
      </div>
      <div className="AdminAccount-image">
        <img
          src="https://jonmircha.com/img/jonmircha.jpg"
          alt="name"
          width="300px"
          height="300px"
        />
      </div>
      <div className="AdminAccount-name">
        <h3>{change.username}</h3>
      </div>

      <form className="AdminAccount-form">
        {lockers.map((f, i) => (
          <div key={i}>
            <div className="d-flex flex-column p-2 align-items-start">
              <label className="">{f.label}</label>
              <div className="d-flex">
                <input
                  type="string"
                  placeholder={f.placeholder}
                  defaultValue={change[f.form]}
                  onChange={(e) => handleChange(e, f.form)}
                  disabled={disable !== f.form}
                  className={error[f.form] ? "FormCreateError" : ""}
                />
                <button className="" onClick={(e) => handleEdit(e, f.form)}>
                  <FiEdit3 />
                </button>
              </div>
            </div>
            {error[f.form] ? (
              <p className="FormCreateError">{f.required}</p>
            ) : null}
          </div>
        ))}
      </form>
      {state ? (
        <div className="">
          <button onClick={handleSubmitForm}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : null}
    </div>
  );
}

export default AdminDashboardAccount;
