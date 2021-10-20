import React, { Component } from 'react'
import Navbar from './Navbar'

export class Noresponse extends Component {
    render() {
        return (
            <>
            <Navbar />
            <div className="d-flex justify-content-center m-4">
                No Response
            </div>
            </>
        )
    }
}

export default Noresponse
