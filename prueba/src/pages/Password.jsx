import React from 'react';
import '../css/Styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Password(){
    return(
    
        <div className="background">
            <body>
                <div className="frame">
                    <div className="frame2"><header><h3>OLVIDE MI CONTRASEÑA</h3></header></div>
                    <div className="frame3"> 
                        <label htmlFor="name"></label>
                        <input type= "email" name="name" placeholder="Ingresa tu correo" id="name"></input>
                    </div>

                    <div className="frame4"> 
                        <label htmlFor="name2"></label>
                        <input type= "password" name="name2" placeholder="Ingresa nueva constraseña" id="name2"></input>
                    </div>

                    <div className='button'>

                        <button type="button" class="btn btn-primary btn-lg"> Aceptar </button>

                    </div>
                </div>
            </body>
        </div>
    
    
    

    );
}

export default Password;