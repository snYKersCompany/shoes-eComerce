import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../../styles/FormUser.css";
import Axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function FormUserUpdate () {
    // States
    const [input, setInput] = useState({ name: '', email: '', phone: '', address: '', city: '', cp: '', state: '', country: '', image: '' });
    const [error, setError] = useState({});
    const [submit, setSubmit] = useState(false);
    const [file, setFile] = useState(null);

    // Hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useAuth();
    
    // Variables
    const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
    const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET;    

    // Functions
    useEffect(() => {
        if (submit === true) {
            setTimeout(() => {
                setSubmit(false);
                document.getElementById("Form").reset();
            }, 5000);
        }
    }, [submit, user]);

    function validateInput (value, name) {
        const expression = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/        

        switch (name) {
            case 'name': return (!value || !expression.test(value)) ? setError({ ...error, name: 'It must set a valid name' }) : setError({ ...error, name: '' });            
            case 'phone': return (!value) ? setError({ ...error, phone: 'Please, provide a phone number' }) : setError({ ...error, phone: '' });
            case 'address': return (!value) ? setError({ ...error, address: 'Please, provide an address' }) : setError({ ...error, address: '' });
            case 'city': return (!value) ? setError({ ...error, city: 'Please provide a name of city' }) : setError({ ...error, city: '' });
            case 'cp': return (isNaN(parseInt(value))) ? setError({ ...error, cp: 'Please, provide a valid number of cp' }) : setError({ ...error, cp: '' });
            case 'state': return (!value) ? setError({ ...error, state: 'Please provide a name of State' }) : setError({ ...error, state: '' });
            case 'country': return (!value) ? setError({ ...error, country: 'Please, provide a name of country' }) : setError({ ...error, country: '' });
        }
    }

    async function handleImage (event) {
        setFile(event.target.files[0]);
        const data = new FormData();
        data.append("file", event.target.files[0]);
        data.append("upload_preset", UPLOAD_PRESET);
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload/`, 
            { method: "POST", body: data });
        const info = await response.json();        
        setInput({ ...input, [event.target.name]: info.url });
    }

    function handleChange (event) {
        setInput({ ...input, [event.target.name]: event.target.value });        
        validateInput(event.target.value, event.target.name);        
    }

    async function handleSubmit (event) {
        if (user) {
            event.preventDefault();
            const response = await Axios.put(`http://localhost:3001/api/users/update/${user.uid}`, input);
            console.log(response);
            setSubmit(true);
            setInput({});
        }
        else {
            navigate("/login");
        }
    }

    return(
        <div className = "container">
            <div className = "group">
                <form onSubmit = {handleSubmit} className = "form" id = "Form">
                    <label htmlFor = "email">Email: </label>
                    {user ? <input placeholder = {user.email} id = "email" type = "text" name = "email" value = {input.email} className = {error.email && "danger"} onChange = {handleChange} readOnly/> : null}

                    <label htmlFor = "name">Name: </label>
                    <input id = "name" type = "text" name = "name" value = {input.name} className = {error.name && "danger"} onChange = {handleChange}/>
                    {!error.name ? null : <p className = "danger">{error.name}</p>}

                    <label htmlFor = "phone">Phone: </label>
                    <input id = "phone" type = "text" name = "phone" value = {input.phone} className = {error.phone && "danger"} onChange = {handleChange}/>
                    {!error.phone ? null : <p className = "danger">{error.phone}</p>}

                    <label htmlFor = "address">Address: </label>
                    <input id = "address" type = "text" name = "address" value = {input.address} className = {error.address && "danger"} onChange = {handleChange}/>
                    {!error.address ? null : <p className = "danger">{error.address}</p>}

                    <label htmlFor = "city">City: </label>
                    <input id = "city" type = "text" name = "city" value = {input.city} className = {error.city && "danger"} onChange = {handleChange}/>
                    {!error.city ? null : <p className = "danger">{error.city}</p>}

                    <label htmlFor = "cp">CP: </label>
                    <input id = "cp" type = "text" name = "cp" value = {input.cp} className = {error.cp && "danger"} onChange = {handleChange}/>
                    {!error.cp ? null : <p className = "danger">{error.cp}</p>}

                    <label htmlFor = "state">State: </label>
                    <input id = "state" type = "text" name = "state" value = {input.state} className = {error.state && "danger"} onChange = {handleChange}/>
                    {!error.state ? null : <p className = "danger">{error.state}</p>}

                    <label htmlFor = "country">Country: </label>
                    <input id = "country" type = "text" name = "country" value = {input.country} className = {error.country && "danger"} onChange = {handleChange}/>
                    {!error.country ? null : <p className = "danger">{error.country}</p>}

                    <input type="file" onChange={handleImage} name = "image" />                    
                    { file ? <img alt="Preview" height="60" src={URL.createObjectURL(file)} /> : null }

                    {/* Submit Button */}
                    <button type = "submit" value = "CREATE" onClick={handleSubmit} className = "button" disabled = {error.name || !input.name || error.phone || !input.phone || error.address || !input.address || error.city || !input.city || error.cp || !input.cp || error.state || !input.state || error.country || !input.country}>Send data</button>
                    {submit && <h2 className = "confirm">Data successfully set!</h2>}
                </form>
            </div>     
        </div>   
    )
}