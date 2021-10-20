import React, { Component } from 'react'
import NavbarDashoard from './NavbarDashoard'
import Todolist from './Todolist'

export class Dashboard extends Component {
    render() {
        return (
            <div style={{width:"100%",height:"660px",backgroundImage:"url('../images/background.jpg')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
            <NavbarDashoard />
            <div className="d-flex justify-content-center m-4">
                
                <Todolist />
            </div>
            </div>
        )
    }
}

export default Dashboard
