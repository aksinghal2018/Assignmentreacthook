import React, { Component } from 'react'
import Navbar from './Navbar'

export class Aboutus extends Component {
    render() {
        return (
            <div style={{width:"100%",height:"660px",backgroundImage:"url('../images/aboutus.jpg')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
            <Navbar />
            <div>
                Aboutus
            </div>
            </div>
        )
    }
}

export default Aboutus
