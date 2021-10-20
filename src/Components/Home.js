import React, { Component } from 'react'
import Navbar from './Navbar'

export class Home extends Component {
    render() {
        return (
            <div style={{width:"100%",height:"660px",backgroundImage:"url('../images/marvel.jpg')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
                <Navbar />
            </div>
        )
    }
}

export default Home
