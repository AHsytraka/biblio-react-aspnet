import React, { ReactDOM, Component } from "react";

import "./css/Authentification.css";
import GoogleIcon from "./assets/images/google-icon.png";
import FbIcon from "./assets/images/facebook-icon.png";
import InstaIcon from "./assets/images/instagram-icon.png"
import JapWord from "./assets/images/jap-word.png";

const Authentification = () => {
    return (
        <body>
            <p className="login-title"> ❖ Login</p>
            <section className="login-container">
            <img className="jap-word" src={JapWord}/>
                <div className="login-frame">
                    <h5>Se connecter</h5>
                    <form>
                        <label>Nom d'utilisateur </label>
                        <input type="text" name="nom" />
                        <br />
                        <label>Mot de passe</label>
                        <input type="password" name="password" />
                        <br />
                        <input className="form-button" type="button" value="Connecter" />
                    </form>

                    <section className="social-frame">
                        <div className="social-frame-1">
                            <div></div><p>Autre moyen de se connecter</p><div></div>
                        </div>
                        <div className="social-frame-2">
                            <a href="www.google.com"><img className="social-image" src={GoogleIcon}/></a>
                            <a href="www.facebook.com"><img className="social-image" src={FbIcon}/></a>
                            <a href="www.instagram.com"><img className="social-image" src={InstaIcon}/></a>
                        </div>
                    </section>
                </div>
            </section>
        </body>
    )
}

export default Authentification;