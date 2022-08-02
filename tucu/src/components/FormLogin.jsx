import React from "react";
import './styles/FormLogin.scss';
import ButtonCompt from './ButtonComp';
import loginImage from '../icons/imgLogin.jpg';
const FormLogin = () => {
    return (
        <div className="login">
            <div className='login-component'>

                <div className='login-content'>
                    <div className='login-content_info'>
                        <img src={loginImage} alt="" />
                    </div>
                    <div className='login-content_form'>
                        <h2>Inicio de sesión</h2>
                        <form>
                            <div className="form-group">
                                <label for="nameUser">Usuario / Correo electrónico</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@email.com" />
                            </div>

                            <div className="form-group">
                                <label for="exampleInputEmail1">Contraseña</label>
                                <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="***********" />
                            </div>

                            <div className='form-buton'>
                                <a href="/Start">
                                    <ButtonCompt className="submit-buton" textButton={"ENTRAR"} />
                                </a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FormLogin;