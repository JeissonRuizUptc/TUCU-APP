import React from 'react';
import './styles/Contact.scss';
import ButtonCompt from '../components/ButtonComp';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-component'>
                <div className='contact-tittle'>
                    <h1>Trabaja con nosotros</h1>
                </div>
                <div className='contact-content'>
                    <div className='contact-content_info'>
                        <h2>Haz parte de la comunidad que busca transformar el delivery en LATAM</h2>
                        <p>Si te interesa alguno de nuestros cargos vacantes, empieza por postularte aquí y adjunta tu curriculum vitae.
                            Buscamos repartidores, desarrolladores y talento humano para nuestra expanción. </p>
                    </div>
                    <div className='contact-content_form'>
                        <h2>Postulate ahora</h2>
                        <form>
                            <div className="form-group">
                                <label for="nameUser">Nombre/Empresa</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu nombre" />
                            </div>

                            <div className="form-group">
                                <label for="exampleInputEmail1">Correo electronico</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@email.com" />
                            </div>

                            <div className="form-group">
                                <label for="exampleInputEmail1">Numero de telefono</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="(+57) 3112565899" />
                            </div>

                            <div className="form-group">
                                <label for="exampleInputEmail1">Motivo de interes</label>
                                <input type="email" className="form-control" id="input-text" aria-describedby="emailHelp" placeholder="Tucu puede ayudar a mejorar mi empresa" />
                            </div>
                            <div className='form-buton'>
                                <ButtonCompt className="submit-buton" textButton={"Enviar"}/>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Contact;