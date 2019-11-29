import React, { Component } from "react"
import { throws } from "assert"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


export default function ParamsExample() {
    return (
      <Router>
        <div>
          <h2>Accounts</h2>
  
          <ul>
            <li>
              <Link to="/netflix">Netflix</Link>
            </li>
            <li>
              <Link to="/zillow-group">Zillow Group</Link>
            </li>
            <li>
              <Link to="/yahoo">Yahoo</Link>
            </li>
            <li>
              <Link to="/modus-create">Modus Create</Link>
            </li>
          </ul>
  
          <Switch>
            <Route path="/:id" children={<Child />} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  function Child() {
    console.log(useParams())
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }
  


  // class Lista extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             inputText: "",
//             list: []
//         }
//     }

//     agregarItem = event => {
//         if ( this.state.inputText == "" ) {
//             alert("Error, campo vacio");
//         } else {

//             let auxArr = this.state.list.slice();
//             auxArr.push( this.state.inputText )
//             this.setState( {list: auxArr} )
            
//             console.log(this.state.list)
//         }
//     }

//     manejarCambio = event => {
//         console.log(event.target.value)
//         this.setState({inputText: event.target.value })
//     }
    
//     render() {
//         console.log( this.state.list )
//         return <>
//             <input type='text' onChange={this.manejarCambio} />
//             <button onClick={this.agregarItem}> Enviar </button>
//             <br />
//             <ul>
//                 { 
//                     this.state.list.map( item => <li>{item}</li> )
//                 }
//             </ul>
//         </>
//     }
// }

// export default Lista