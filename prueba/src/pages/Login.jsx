import React from 'react';
import '../css/Styles.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Login() {
    return(
    
        <div className="background">
            <body>
                <div className="frame1">
                    <div className="frame2"><header><h1>INICIAR SESIÓN</h1></header></div>
                    <div className="frame3"> 
                        <label htmlFor="name"></label>
                        <input type= "email" name="name" placeholder="Ingresa tu correo" id="name"></input>
                    </div>

                    <div className="frame4"> 
                        <label htmlFor="name2"></label>
                        <input type= "password" name="name2" placeholder="Ingresa tu contraseña" id="name2"></input>
                    </div>

                    <div className='check'>
                        <input className="form-check-input" type="checkbox" id="basic_checkbox_1"/>
                        <label className="form-check-label" for="basic_checkbox_1">Recordar usuario</label>
                    </div>

                    <div className="frame5">
                        <a href="Register">Crear cuenta</a>
                    </div>
                    <div className="frame6">
                        <a href="Password">Olvidaste tu contraseña?</a>
                    </div>
                    <div className='button'>

                        <button type="button" class="btn btn-primary btn-lg">Ingresar</button>

                    </div>
                </div>
            </body>
        </div>
    
    
    

    );
}

export default Login;