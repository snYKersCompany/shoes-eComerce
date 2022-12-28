import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../../styles/FormUser.css';
import axios from 'axios';
import { useEffect } from "react";

export default function FormUser () {
    // States
    const [input, setInput] = useState({});
    const [error, setError] = useState({});
    const [submit, setSubmit] = useState(false);
    const [file, setFile] = useState(null);

    // Variables
    const CLOUD_NAME = "dhkhcgikf";
    const UPLOAD_PRESET = "dui1pixj";

    // Dependencies
    const dispatch = useDispatch();
    const url = 'http://localhost:3001/api/users';

    // Functions
    useEffect(() => {
        if (submit === true) {
            setTimeout(() => {
                setSubmit(false);
                document.getElementById("Form").reset();
            }, 5000);
        }
    }, [submit]);

    function validateInput (value, name) {
        const expressionName = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
        const expressionEmail = /\S+@\S+\.\S+/

        switch (name) {
            case 'name': return (!value || !expressionName.test(value)) ? setError({ ...error, name: 'It must set a valid name' }) : setError({ ...error, name: '' });
            case 'email': return (!value || !expressionEmail.test(value)) ? setError({ ...error, email: 'Set a valid email' }) : setError({ ...error, email: '' });
            case 'phone': return (!value) ? setError({ ...error, phone: 'Please, provide a phone number' }) : setError({ ...error, phone: '' });
            case 'address': return (!value) ? setError({ ...error, address: 'Please, provide an address' }) : setError({ ...error, address: '' });
            case 'city': return (!value) ? setError({ ...error, city: 'Please provide a name of city' }) : setError({ ...error, city: '' });
            case 'cp': return (isNaN(parseInt(value))) ? setError({ ...error, cp: 'Please, provide a valid number of cp' }) : setError({ ...error, cp: '' });
            case 'state': return (!value) ? setError({ ...error, state: 'Please provide a name of State' }) : setError({ ...error, state: '' });
            case 'country': return (!value) ? setError({ ...error, country: 'Please, provide a name of country' }) : setError({ ...error, country: '' });
        }
    }

    async function upload () {        
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", UPLOAD_PRESET);
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload/`, 
            { method: "POST", body: data });
        const info = await response.json();
        console.log(info);
    }

    function handleChange (event) {
        setInput({ ...input, [event.target.name]: event.target.value });        
        validateInput(event.target.value, event.target.name);
    }

    function handleSubmit (event) {
        event.preventDefault();
        setSubmit(true);
        // axios.post(url, input).then(response => console.log(response.data));
        setInput({});        
    }
    
    return(
        <div>
            <div className = "group">
                <form onSubmit = {handleSubmit} className = "form" id = "Form">
                    <label htmlFor = "name">Name: </label>
                    <input id = "name" type = "text" name = "name" value = {input.name} className = {error.name && "danger"} onChange = {handleChange}/>
                    {!error.name ? null : <p className = "danger">{error.name}</p>}

                    <label htmlFor = "email">Email: </label>
                    <input id = "email" type = "text" name = "email" value = {input.email} className = {error.email && "danger"} onChange = {handleChange}/>
                    {!error.email ? null : <p className = "danger">{error.email}</p>}

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

                    <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
                    <button onClick={upload}>Upload</button>
                    { file ? <img alt="Preview" height="60" src={URL.createObjectURL(file)} /> : null }

                    {/* Submit Button */}
                    <button type = "submit" value = "CREATE" onClick={handleSubmit} className = "button" disabled = {error.name || !input.name || error.email || !input.email || error.phone || !input.phone || error.address || !input.address || error.city || !input.city || error.cp || !input.cp || error.state || !input.state || error.country || !input.country}>Send data</button>
                    {submit && <h2 className = "confirm">Data successfully set!</h2>}
                </form>
            </div>
        </div>
    )
}