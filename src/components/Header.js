import React, { Component } from "react"

import { HashRouter, Switch, Route, Link } from "react-router-dom"


class Header extends Component {
    constructor(props){
        super(props)
    }
    render()
    {
        return <>
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link class="navbar-brand" to="/login">Totransfer.me</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/registro">Registro <span class="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    }
}

export default Header