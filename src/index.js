import React from "react"
import ReactDOM from "react-dom"
import { HashRouter, Switch, Route, Link } from "react-router-dom"

import Container from "./components/Container"
import Header from "./components/Header"


function App(props) {
    return <>
        <HashRouter>
            <Header></Header>

            <Switch>
                <Route path="/login">
                    <Container type={ "login" } />
                </Route>
                <Route path="/registro">
                    <Container type={ "registro" } />
                </Route>
                <Route path="/upload">
                    <Container type={ "upload" } />
                </Route>
                <Route path="/">
                    <Container type={ "login" } />
                </Route>
            </Switch>
        </HashRouter>
    </>
}

ReactDOM.render(<App />, document.getElementById("root"))