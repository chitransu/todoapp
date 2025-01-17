import React , {Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import WelcomeComponent from './WelcomeComponent'
import LogoutComponent from './LogoutComponent'
import TodoComponent from './TodoComponent'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                 <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login"  component={LoginComponent}></Route>
                            <AuthenticatedRoute path="/welcome/:uname"  component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todos"  component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent} ></Route>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router> 
            </div>
        )
    }
}

export default TodoApp;