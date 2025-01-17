import React,{Component} from 'react'
import TodoService from '../../api/todo/TodoService'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment';

class ListTodosComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            todos : [],
            message: ''
        }
    }

    componentDidMount(){
        this.refreshTodos();
    }

    refreshTodos = () => {
        let username = AuthenticationService.getLoggedInUser();
        TodoService.getAllTodos(username)
            .then(response => this.setState({
                todos: response.data
            }))
    }

    deleteTodoClicked = (id) => {
        let username = AuthenticationService.getLoggedInUser();
        TodoService.deleteTodos(username,id)
                    .then(response => {
                        this.setState({message: `Delete of Todo ${id} Successful`})
                        this.refreshTodos()
                    }                
                )
    }

    updateTodoClicked = (id) => {
        this.props.history.push(`/todos/${id}`)
    }

    addTodoClicked = () => {
        this.props.history.push(`todos/-1`)
    }

    render(){
        return (
            <div>
                <h1> List Todos </h1>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Complete ?</th>
                                <th>Update</th>
                                <th>Delete</th>         
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td><button className='btn btn-success' onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className='btn btn-warning' onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            }           
                        </tbody>
                    </table>
                    <div className="row"> 
                            <button className='btn btn-success' onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default ListTodosComponent;