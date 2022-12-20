import React, { useState } from "react";
import axios from 'axios';
import "./css/Authentification.css";
import GoogleIcon from "./assets/images/google-icon.png";
import FbIcon from "./assets/images/facebook-icon.png";
import InstaIcon from "./assets/images/instagram-icon.png"
import JapWord from "./assets/images/jap-word.png";



const Authentification = () => {
    //React Hook useState allow to track state in a function component
    //State refers to data or properties that need to be tracking in an application
    //useState value : Current value and function to update de State
    //useState can be used to keep track string, int, booleans, arrays, objects,...

    //State initialization : tracking string
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //State initialization : tracking array -> adding data in database's table
    const [authentification, setAuthentification] = useState([]);

    //handling submit
    const url = "https://localhost:7271";
    const Submitting = (e) => {
        // alert(username +" "+ password)
        const data = {
            UserName : username,
            Password : password,
            Type: "Add"
        }
        axios
        .post(`${url}/api/Authentification/AddAuth`,data)
        .then((json) => {
            alert(JSON.stringify(json))
        })
        .catch((error) => {
            alert(error)
        })
    }

    return (
        <div>
            <section className="login-container">
            <img className="jap-word" src={JapWord}/>
                <div className="login-frame">
                    <h5>Se connecter</h5>

                    {/*
                        onChange event handler : prop
                        Using onChange, application can listen to user input in real-time.
                        When an onChange event occurs, the props will call the function passed in
                        its parameters
                    */}
                    <form>
                        <label>Nom d'utilisateur </label>
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        <br />

                        <label>Mot de passe</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <br />

                        <input 
                            className="form-button" 
                            type="button" 
                            value="Connecter"
                            onClick={(e) => Submitting(e)}
                        />
                    </form>

                    <section className="social-frame">
                        <div className="social-frame-1">
                            <div></div><p>Autre moyen de se connecter</p><div></div>
                        </div>
                        <div className="social-frame-2">
                            <a href="https://www.google.com"><img className="social-image" alt="images" src={GoogleIcon}/></a>
                            <a href="https://www.facebook.com"><img className="social-image" alt="images" src={FbIcon}/></a>
                            <a href="https://www.instagram.com"><img className="social-image" alt="images" src={InstaIcon}/></a>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Authentification;