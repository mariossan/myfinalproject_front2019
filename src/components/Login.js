import React, { Component } from "react"
import { Link } from "react-router-dom"

// ahora se importa axios para poder hacer requests POST y GET
import axios from 'axios';

import { withSwalInstance } from 'sweetalert2-react'
import swal from 'sweetalert2'

const { withRouter } = require("react-router-dom")
 
const SweetAlert = withSwalInstance(swal)


class Login extends Component {
    constructor(props) {
        super(props)

        console.log("history", this.props.history)

        this.state = {
            email: {
                value: "",
                verified: false
            },
            passwd: {
                value: "",
                verified: false
            },
            err: false,
            textErr: ''
        }
    }

    verifyEmail = event => {
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

    verifyFirstPass = event => {

        if ( event.target.value !== "" ) {
            this.setState( {
                passwd: {
                    value: event.target.value,
                    verified: true
                }
            } )
        } else {
            this.setState( {
                passwd: {
                    value: event.target.value,
                    verified: false
                }
            } )
        }
    }

    sendInfo = event => {
        // se hace revision del formulario para saber si se hace envio o se mandan mensaje de error
        if ( this.state.email.verified && this.state.passwd.verified ) {
            axios.post(`http://localhost:8000/login`, {
                user: this.state.email.value,
                pass: this.state.passwd.value
            })
            .then(res => {
                // console.log("respuesta del POST en cliente:", res.data)
                this.props.history.push("/upload")
                
            }).catch(  error => {
                this.setState({
                    err: true,
                    textErr: 'Usuario y/o contraseña incorrectos'
                })
            })
        } else {
            this.setState({
                err: true,
                textErr: 'Por favor ingrese datos antes de enviar'
            })
        }

        event.preventDefault()
    }

    render() {
        return <>
            <h3 align='center'>Login</h3>
            <form action="#" align='center'>
                <input type="text" class="form-control" placeholder="Correo" onChange={ this.verifyEmail } />
                <input type="password" class="form-control" placeholder="Contraseña"  autocomplete="false" onChange={ this.verifyFirstPass } />
                <button type="submit" class="btn btn-info" onClick={ this.sendInfo }>Enviar</button>

                <p>
                    No tengo cuenta y quiero <Link to="/registro">registrarme</Link>
                </p>

                <SweetAlert
                    show={this.state.err}
                    title="Login"
                    text={ this.state.textErr }
                    onConfirm={() => this.setState({ err: false })}
                />
            </form>
        </>
    }
}


export default withRouter(Login)
// export default Login
