import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/FormUser.css";
import Axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { getUserDashboards } from "../../redux/features/users/usersActions";
import { useParams } from "react-router-dom";

export default function FormUserUpdate () {
    const { _id } = useParams();
    const { userDashboard } = useSelector((state) => state.users);
    // States
    const [input, setInput] = useState({ name: '', email: '', username: '', password: '', phone: '', address: '', city: '', cp: '', state: '', country: '', image: '' });
    const [error, setError] = useState({});
    const [submit, setSubmit] = useState(false);    

    //STRIPE y LOCALSTORAGE
    let productsCart = localStorage.getItem("carrito");

    const [products, setProducts] = useState(
        productsCart?.length > 1 ? JSON.parse(productsCart) : []
    );

    // Hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useAuth();

    // Functions
    useEffect(() => {
        dispatch(getUserDashboards(_id));
        if (submit === true) {
            setTimeout(() => {
                setSubmit(false);
                document.getElementById("Form").reset();
            }, 5000);
        }
    }, [submit, user]);

    function validateInput (value, name) {
        const expression = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
        const expressionEmail = /^[a-z0-9_-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        const expressionPassword = /^[a-zA-Z0-9_-]{4,16}$/

        switch (name) {
            case 'name': return (!value || !expression.test(value)) ? setError({ ...error, name: 'It must set a valid name' }) : setError({ ...error, name: '' });
            case 'email': return (!value || expressionEmail.test(value)) ? setError({ ...error, email: 'It must set a valid email' }) : setError({ ...error, email: '' });
            case 'username': return (!value) ? setError({ ...error, username: 'Please, provide an username' }) : setError({ ...error, email: '' });
            case 'password': return (!value || expressionPassword.test(value)) ? setError({ ...error, password: 'It must contains 8 characters, 1 number and 1 special character' }) : setError({ ...error, password: '' });
            case 'phone': return (!value) ? setError({ ...error, phone: 'Please, provide a phone number' }) : setError({ ...error, phone: '' });
            case 'address': return (!value) ? setError({ ...error, address: 'Please, provide an address' }) : setError({ ...error, address: '' });
            case 'city': return (!value) ? setError({ ...error, city: 'Please provide a name of city' }) : setError({ ...error, city: '' });
            case 'cp': return (isNaN(parseInt(value))) ? setError({ ...error, cp: 'Please, provide a valid number of cp' }) : setError({ ...error, cp: '' });
            case 'state': return (!value) ? setError({ ...error, state: 'Please provide a name of State' }) : setError({ ...error, state: '' });
            case 'country': return (!value) ? setError({ ...error, country: 'Please, provide a name of country' }) : setError({ ...error, country: '' });
        }
    }

    function handleChange (event) {
        setInput({ ...input, [event.target.name]: event.target.value });        
        validateInput(event.target.value, event.target.name);        
    }

    async function handleSubmit (event) {
        if (user) {
            event.preventDefault();
            const response = await Axios.put(`http://localhost:3001/api/users/update/${user.uid}`, input);            
            setSubmit(true);
            Axios
            .post("http://localhost:3001/api/checkouts", {
                products,
            })
            .then((res) => {
                if (res.data.url) {
                    window.location.href = res.data.url;
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
            console.log(response.data);
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

                    <label htmlFor = "username">Username: </label>
                    {user ? <input placeholder = {user.username} id = "username" type = "text" name = "username" value = {input.username} className = {error.username && "danger"} onChange = {handleChange} /> : null}
                    {!error.username ? null : <p className = "danger">{error.username}</p>}

                    <label htmlFor = "password">Password: </label>
                    <input id = "password" type = "text" name = "password" value = {input.password} className = {error.password && "danger"} onChange = {handleChange}/>
                    {!error.password ? null : <p className = "danger">{error.password}</p>}

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

                    {/* Submit Button */}
                    <button type = "submit" value = "CREATE" onClick={handleSubmit} className = "button" disabled = {error.email || !input.email || error.username || !input.username || error.password || !input.password || error.name || !input.name || error.phone || !input.phone || error.address || !input.address || error.city || !input.city || error.cp || !input.cp || error.state || !input.state || error.country || !input.country}>Send data</button>
                    {submit && <h2 className = "confirm">Data successfully set!</h2>}
                </form>
            </div>     
        </div>   
    )
}