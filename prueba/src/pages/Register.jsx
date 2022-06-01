import React from 'react';
import '../css/Styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Register(){
    return(
        <div className="background">
            <body>
                <div className="frame1">
                    <div className="frame2"><header><h2>Crear cuenta</h2></header></div>
                    <div className="create"> 
                        <label htmlFor="crea"></label>
                        <input type= "email" name="crea" placeholder="Ingresa tu correo" id="crea"></input>
                    </div>

                    <div className="create2"> 
                        <label htmlFor="crea2"></label>
                        <input type= "text" name="crea2" placeholder="Ingresa tu nombre" id="crea2"></input>
                    </div>

                    <div className="create3"> 
                        <label htmlFor="crea3"></label>
                        <input type= "text" name="crea3" placeholder="Ingresa tu contraseña" id="crea3"></input>
                    </div>

                    <div className="create4"> 
                        <label htmlFor="crea4"></label>
                        <input type= "text" name="crea4" placeholder="Confirmar tu contraseña" id="crea4"></input>
                    </div>

                    <div className='check2'>
                        <input className="form-check-input" type="checkbox" id="basic_checkbox_1"/>
                        <label className="form-check-label" for="basic_checkbox_1">Acepto los términos y condiciones del servicio</label>
                    </div>

                    <div className='button2'>

                        <button type="button" class="btn btn-secondary btn-lg">Crear usuario</button>

                    </div>
                </div>
            </body>
        </div>
    );
}

export default Register;