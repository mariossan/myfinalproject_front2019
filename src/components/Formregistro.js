import React, { Component } from "react"
import axios from 'axios'

import { withSwalInstance } from 'sweetalert2-react'
import swal from 'sweetalert2'
import { throwStatement } from "@babel/types"
 
const SweetAlert = withSwalInstance(swal)

class Formregistro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: {
                value: "",
                verified: false
            },
            passwd: {
                value: "",
                verified: false
            },
            repasswd: {
                value: "",
                verified: false
            },
            tyc: false,
            err: false,
            tetxErr: "Por favor, llene correctamente los campos del formulario"
        }
    }

    getEmail = event => {
        let  pattern    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let inputMail   = event.target.value


        if ( !pattern.test(inputMail) ) {
            this.setState( {
                email: {
                    value: inputMail,
                    verified: false
                }
            } )
        } else {
            this.setState( {
                email: {
                    value: inputMail,
                    verified: true
                }
            } )
        }
    }

    getPass = event => {
        if ( event.target.value !== "" ) {
            this.setState( {
                passwd: {
                    value: event.target.value,
                    verified: true
                }
            } )
        } else {
            let txtErr = this.state.txtErr

            this.setState( {
                passwd: {
                    value: event.target.value,
                    verified: false
                }
            } )
        }
    }

    getRePass = event =>  {

        let repass = event.target.value

        if ( repass !== "" && repass == this.state.passwd.value ) {
            this.setState( {
                repasswd: {
                    value: repass,
                    verified: true
                }
            } )
        } else {
            this.setState( {
                repasswd: {
                    value: repass,
                    verified: false
                }
            } )
        }
    }

    tyc = event => {
        this.setState({
            tyc: event.target.checked
        })
    }


    sendForm = event => {
        // se hace revision del formulario para saber si se hace envio o se mandan mensaje de error
        if ( this.state.email.verified && this.state.passwd.verified && this.state.repasswd.verified && this.state.tyc ) {
            axios.post(`http://localhost:8000/register`, {
                user: this.state.email.value,
                pass: this.state.passwd.value
            })
            .then(res => {
                console.log("Respuesta del POST en cliente de regisrto:", res.data)
            })
        } else {
            this.setState({
                err: true
            })
        }

        event.preventDefault()
    }

    render() {
        return <>
            <h3 align='center'>Registro</h3>
            <form action="#" align='center'>
                <input type="text" class="form-control" placeholder="Correo" onChange={ this.getEmail } />
                <input type="password" class="form-control" placeholder="Contraseña" onChange={ this.getPass } />
                <input type="password" class="form-control" placeholder="Confirma Contraseña"  onChange={ this.getRePass } />
                <div>
                    <input type="checkbox" id="tyc" onChange={ this.tyc } />
                    <label for="tyc">Acepto <a href='#' data-toggle="modal" data-target="#tycModal">Términos y Condiciones</a></label>
                </div>

                <button type="submit" class="btn btn-info" onClick={ this.sendForm }>Registrame</button>
            </form>

            <SweetAlert
                show={this.state.err}
                title="Login"
                text={ this.state.tetxErr }
                onConfirm={() => this.setState({ err: false })}
            />

            
            <div class="modal fade" id="tycModal" tabindex="-1" role="dialog" aria-labelledby="tycModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="tycModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h2>T&eacute;rminos y condiciones</h2>
                        <div id="description">
                            <p>Los T&eacute;rminos y Condiciones, tambi&eacute;n denominados como Condiciones Generales de Uso, son un documento&nbsp;dise&ntilde;ado para aquellas personas que van a crear o administrar una p&aacute;gina o sitio web, en el cual se establecen las condiciones bajo las cuales los usuarios ingresar&aacute;n y har&aacute;n uso del sitio web.</p>
                            <p>El documento se encuentra dise&ntilde;ado para&nbsp;sitios que sean operados o manejados&nbsp;por personas o empresas que tengan su domicilio&nbsp;en la Rep&uacute;blica Mexicana o&nbsp;que est&eacute;n&nbsp;destinados a personas que habitan en este pa&iacute;s, no obstante, su contenido hace referencia a disposiciones civiles comunes en la mayor&iacute;a de los pa&iacute;ses del mundo.</p>
                            <p>Este documento&nbsp;es utilizado para regular las condiciones y reglas a las que se someten tanto los usuarios de un sitio web como su propietario y/o administrador, en lo referente al acceso y utilizaci&oacute;n del sitio web. De igual manera, hace referencia a las pol&iacute;ticas de privacidad, protecci&oacute;n de datos personales, enlaces, etc., que se tomar&aacute;n para proteger la privacidad de los usuarios.</p>
                            <p>Dichas&nbsp;reglas&nbsp;y principios&nbsp;aportan un mayor nivel de confianza y seguridad jur&iacute;dica&nbsp;a los usuarios del sitio web as&iacute; como a sus propietarios y/o administradores, puesto que tambi&eacute;n&nbsp;se establece el tipo de personas a las que va dirigido&nbsp;y&nbsp;las&nbsp;responsabilidades&nbsp;que estos adquieren al hacer uso del sitio o de los servicios que en &eacute;l son ofrecidos.</p>
                            <p>Existe adem&aacute;s otro documento conocido generalmente como&nbsp;<a href="https://www.wonder.legal/mx/modele/condiciones-generales-venta-contratacion-sitio-web">"Condiciones Generales de Venta"</a>&nbsp;que se utiliza para regular la adquisici&oacute;n de productos o servicios a trav&eacute;s de internet, no obstante, este &uacute;ltimo no debe ser confundido con el presente documento, puesto que el presente solo se limita a regular el acceso, funcionamiento e interacci&oacute;n del usuario con el sitio web, sin que se incluya las condiciones bajo las cuales se formalizar&aacute; la adquisici&oacute;n de productos o servicios que tengan un costo o que requieran una licencia; y que se puedan obtener o adquirir a trav&eacute;s del mismo sitio web.</p>
                            <p><br />&iquest;C&oacute;mo utilizar este documento?</p>
                            <p>El modelo incluye diversos supuestos que se pueden presentar con relaci&oacute;n a los contenidos, productos y/o servicios se encuentren disponibles dentro del sitio, y se adapta en funci&oacute;n de las necesidades y caracter&iacute;sticas del sitio web, por tanto la persona que desee utilizarlo deber&aacute; tomar en cuenta entre otras cosas, lo siguiente:</p>
                            <ul>
                                <li>El tipo de p&uacute;blico al que se encuentra dirigido el sitio web, esto es, si es para todo tipo de p&uacute;blico o si es solamente para mayores de edad;<br /><br /></li>
                                <li>Si el acceso al sitio web requerir&aacute; de un registro del usuario, o por el contrario se encontrar&aacute; disponible para todo p&uacute;blico sin necesidad de registro;<br /><br /></li>
                                <li>Si ser&aacute; necesario el pago de una contraprestaci&oacute;n para hacer uso del sitio web, o bien este ser&aacute; de car&aacute;cter gratuito;</li>
                            </ul>
                            <p>El modelo&nbsp;incluye los aspectos que resultan necesarios en materia de protecci&oacute;n de datos personales&nbsp;en posesi&oacute;n de particulares e incluso se puede especificar el&nbsp;<a href="https://www.wonder.legal/mx/modele/aviso-privacidad" target="_blank" rel="noopener">Aviso de Privacidad</a>, en caso de que este se tenga disponible a trav&eacute;s del mismo sitio web, todo esto aporta un gran nivel de confianza y seguridad jur&iacute;dica, por lo que ser&iacute;a recomendable que este tipo de documentos se elaboren para todos y cada uno de los sitios web que se encuentran en internet, puesto que los mismos se consideran aceptados por el usuario al hacer uso del sitio y/o acceder a sus contenidos.</p>
                            <p>El documento deber&aacute; estar de disponible en la ventana principal del sitio web&nbsp;(usualmente desde el archivo .index), no obstante, lo recomendable es que sea accesible desde cualquier parte del sitio web, a fin de que pueda ser consultado en todo momento por el usuario.</p>
                            <p>En caso de que&nbsp;por el tipo de contenido, productos y/o servicios que se encuentren disponibles en el sitio web,&nbsp;se considere necesaria la aceptaci&oacute;n expresa del usuario de los t&eacute;rminos y condiciones; se deber&aacute; de tomar en cuenta que el usuario debe tener la posibilidad de visualizar el documento de forma &iacute;ntegra; y se debe habilitar un medio para que el usuario exprese que se encuentra de acuerdo con los mismos (usualmente a trav&eacute;s de un formulario).</p>
                            <p><br />Derecho aplicable</p>
                            <ul>
                                <li>Capitulo segundo de la Ley Federal de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de Particulares.<br /><br /></li>
                                <li>C&oacute;digo Civil Federal.</li>
                            </ul>
                            <p><br />Ayuda de un abogado</p>
                            <p>Tambi&eacute;n tienes la opci&oacute;n de&nbsp;consultar a un abogado si necesitas ayuda.</p>
                            <p>El abogado puede contestar a tus preguntas o ayudarte en tus tr&aacute;mites. Al final de la creaci&oacute;n del documento, se te ofrecer&aacute; esta opci&oacute;n.</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Formregistro
