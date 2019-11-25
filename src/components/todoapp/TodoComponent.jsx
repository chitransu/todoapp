import React , {Component} from 'react'
import moment from 'moment'
import { Formik ,Form,Field,ErrorMessage} from 'formik';
import TodoService from '../../api/todo/TodoService.js'
import AuthenticationService from './AuthenticationService.js';

class TodoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: 'Learn Forms',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit= this.onSubmit.bind(this);
    }

    componentDidMount(){

        if(this.state.id === -1){
            return 
        }

        const username = AuthenticationService.getLoggedInUser();
        TodoService.retriveTodo(username,this.state.id)
                    .then(res => this.setState({
                        description: res.data.description,
                        targetDate: moment(res.data.targetDate).format('YYYY-MM-DD')
                    }));
    }

    validate(values){
        let errors = {};
        if(!values.description){
            errors.description = 'Enter a Description';
        }else if(values.description.length < 5){
            errors.description = "Enter aleast 5 cheracters in description"
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = "Enter a valid target date";
        }
        return errors ;
    }

    onSubmit(values){
        const username = AuthenticationService.getLoggedInUser();

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: moment(values.targetDate).format('YYYY-MM-DD')
        }

        if(this.state.id === -1){
            TodoService.createTodo(username,todo).then(() => this.props.history.push('/todos'))
        }else{
            TodoService.updateTodos(username,this.state.id,todo).then(() => this.props.history.push('/todos'))
        }
    }

    render(){
        let {description,targetDate} = this.state;
        return(
            <div>
                <h1>Todo</h1>
                <div className='container'>
                    <Formik
                        initialValues={{description,targetDate}}
                        onSubmit={this.onSubmit}
                        validateOnChange = {true}
                        validateOnBlur = {true}
                        validate = {this.validate}
                        enableReinitialize = {true}               
                    >
                        {
                            (props) => (
                               <Form>
                                   <ErrorMessage name="description" component="div" className='alert alert-warning' />
                                   <ErrorMessage name="targetDate" component="div" className='alert alert-warning' />
                                   <fieldset className="form-group">
                                       <label>Description</label>
                                       <Field className="form-control" type="text" name="description"></Field>
                                   </fieldset>
                                   <fieldset className="form-group">
                                       <label>Target Date</label>
                                       <Field className="form-control" type="date" name="targetDate"></Field>
                                   </fieldset>
                                   <button className="btn btn-success" type="submit">Save</button>
                               </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TodoComponent;