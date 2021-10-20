import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            confirmpassword: ""
        }
    }

    componentDidMount() {

    }
    handler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    submit = (event) => {
        event.preventDefault()
        if (this.state.name !== "" && this.state.lastname !== "" && this.state.username !== "" && this.state.email !== "" && this.state.password !== "" && this.state.confirmpassword !== "") {

            const dataitem = { name: this.state.name, lastname: this.state.lastname, username: this.state.username, email: this.state.email, password: this.state.password }

            axios.post('http://localhost:3001/userdetail', dataitem)
                .then(res => {
                    console.log(res)
                    alert("Register Successfully")
                    window.location.replace("/");
                })
        }
        else {
            alert("Field not be empty")
        }

    }
    render() {
        return (
            <div style={{width:"100%",height:"800px",backgroundImage:"url('../images/register.jpg')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",color:'white'}}>
                <Navbar />
                <div className="container mt-4 border border-primary p-4" style={{ width: "50%", marginBottom: "24px" }}>
                    <h1>Register</h1>

                    <form onSubmit={this.submit} className="formdata">
                        <div className="form-group">
                            <label htmlFor="Name">Name</label>
                            <input type="text" className="form-control" id="Name" placeholder="Enter Name" name="name" onChange={this.handler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Lastname">Lastname</label>
                            <input type="text" className="form-control" id="Lastname" placeholder="Enter Lastname" name="lastname" onChange={this.handler} />                            </div>
                        <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" onChange={this.handler} />                            </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.handler} />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={this.handler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmpassword"> Confirm Password</label>
                            <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password" name="confirmpassword" onChange={this.handler} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default Register
