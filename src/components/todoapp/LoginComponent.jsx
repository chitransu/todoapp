import React,{Component} from 'react';
import AuthenticationService from './AuthenticationService'

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            username : 'i28minutes',
            password : '',
            //isLoginSuccess : false,
            isLoginFailed : false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleClick(){
        if (this.state.username === 'i28minutes' && this.state.password === 'dummy') {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            console.log('Failed')
            this.setState({
                //isLoginSuccess: false,
                isLoginFailed: true
            })
        }
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.isLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password : <input type="password" name="password" password={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.handleClick}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent;