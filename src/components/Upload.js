import React, { Component } from "react"
import { Link } from "react-router-dom"

class Upload extends Component {
    constructor(props) {
        super(props)

        // this.state = {}
    }

    render() {
        return <>
            <h3 align='center'>Upload</h3>
            <form action="#" align='center'>
                <div class="box">
                    <input type="file" name="file-5" id="file-5" class="inputfile inputfile-4" data-multiple-caption="{count} files selected" />
                    <label htmlFor="file-5">
                        <i class="fas fa-file-upload"></i> 
                        <br/>
                        <span>Selecciona un archivo</span>
                    </label>
                </div>

                <input type="text" class="form-control" placeholder="Título" required />
                <input type="email" class="form-control" placeholder="Correo(s) de destinario(s), separados por comas ,"  required />
                <textarea name="" id="" cols="10" rows="5" class="form-control" placeholder="Mensaje" required></textarea>

                <br/>

                <button type="submit" class="btn btn-info">Registrame</button>
            </form>
        </>
    }
}

export default Upload
