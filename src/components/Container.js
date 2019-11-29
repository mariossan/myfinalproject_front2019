import React, { Component } from "react"

import Formregistro from "./Formregistro"
import Login from "./Login"
import Upload from "./Upload"

class Container extends Component {
    constructor(props){
        
        super(props)
    }
    render()
    {
        switch( this.props.type ) {
            case "registro":
                return <>
                            <div class="container">
                                <div class="row justify-content-md-center align-items-center login-form">
                                    <div class="col col-xs-10 col-lg-4  container-form-login">
                                        <div class="container">
                                            <Formregistro></Formregistro>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                break;

            case "login":
                return <>
                        <div class="container">
                            <div class="row justify-content-md-center align-items-center login-form">
                                <div class="col col-xs-10 col-lg-4  container-form-login">
                                    <div class="container">
                                        <Login></Login>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                break;
            
            case "upload":
                return <>
                            <div class="container">
                                <div class="row justify-content-md-center align-items-center login-form">
                                    <div class="col col-xs-10 col-lg-4  container-form-login">
                                        <div class="container">
                                            <Upload></Upload>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                break;
        }
       
        return <>
            <div class="container">
                <h1>Lo Sentimos la pagina que buscas no existe</h1>
            </div>
        </>
    }
}

export default Container