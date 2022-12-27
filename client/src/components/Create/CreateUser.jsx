import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from '../../styles/FormUser.module.css';
import axios from 'axios';

export default function FormUser () {
    // States
    const [input, setInput] = useState({});
    const [error, setError] = useState({});
    const [submit, setSubmit] = useState(false);

    // Dependencies
    const dispatch = useDispatch();
    const url = 'http://localhost:3001/api/users';

    // Functions
    function validateInput (value, name) {
        const expression = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/

        switch (name) {
            case 'name': return (!value || !expression.test(value)) ? setError({ ...error, name: 'It must set a valid name' }) : setError({ ...error, name: '' })
        }
    }
    function handleChange (event) {
        setInput({ ...input, [event.target.name]: event.target.value });
        validateInput(event.target.value, event.target.name);
    }
    function handleSubmit (event) {
        event.preventDefault();
        setSubmit(true);
        axios.post(url, input).then(response => console.log(response.data));
        setInput({});
    }
    return(
        <div className = "creation">
            <div>
                <form onSubmit = {handleSubmit} className = {style.form}>
                <label htmlFor = "name">Name: </label>
                <input id = "name" type = "text" name = "name" value = {input.name} className = {error.name && style.danger} onChange = {handleChange}/>
                {!error.name ? null : <p className = {style.danger}>{error.name}</p>}
                <button type = "submit" value = "CREATE" onClick={handleSubmit} className = {style.button} disabled = {error.name || !input.name}>Send data</button>
                {submit && <h2 className = {style.confirm}>Data successfully set!</h2>}
                </form>
            </div>
        </div>
    )
}