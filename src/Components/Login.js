import axios from 'axios'
import React, { Component } from 'react'
import Navbar from './Navbar'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:"",
             data:""
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/userdetail').then(
            data=>{
                this.state.data=(data.data);
                
            }
        )

    }
    handler=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }
    submit=(event)=>{
        event.preventDefault();
        
        if(this.state.email!="" && this.state.password!=""){
            const data=Object.values(this.state.data)
            let obj = data.find((item) => 
                item.email==this.state.email
            );
            if(obj!=undefined){
                if(obj.password===this.state.password){
                    alert("LOGIN SUCCESSFULL");
                    localStorage.setItem("userdata",JSON.stringify(obj))
                    window.location.replace("/dashboard");
                }
                else{
                    alert("incorrect email or password")
                }
            }
            else{
                alert("incorrect email or password")
            }
        }
        else{
            alert("feild not be empty!")
        }
    }
    render() {
        return (
            <div style={{width:"100%",height:"660px",backgroundImage:"url('../images/loginbackground.jpg')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
            <Navbar />
            <div className="container mt-4 border border-primary p-4" style={{ width: "30%",height:"500px" }}>
                <h1>Login</h1>
                
                    <form className="p-4 mt-4" onSubmit={this.submit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.handler} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder=" Password" name="password" onChange={this.handler}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
               
            </div>
        </div>
        )
    }
}

export default Login
