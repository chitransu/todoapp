import React , {Component} from 'react'
import HelloWorldService from '../../api/todo/HelloWorldServive.js'

class HelloComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            welcomeMessage: ''
        }
        this.retriveMessage = this.retriveMessage.bind(this);
    }

    render(){
        return (
            <div>
                <div>
                    Click here : <button className="btn btn-success" onClick={this.retriveMessage}>Hello Button</button>
                </div>
                <div>
                    welcome mesage : {this.state.welcomeMessage}
                </div>
            </div>
        )
    }

    retriveMessage(){
        //return HelloWorldService.executeHelloWorldService().
                       // then(response => this.setState({welcomeMessage: response.data}));
        return HelloWorldService.executeHelloWorldBeanService()
                            .then(response => this.setState({welcomeMessage: response.data.message}))
                            .catch(error => this.setState({welcomeMessage: error.response.data.message}))
       // return HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        //.then(response => this.setState({welcomeMessage: response.data.message}))
    }
}

export default HelloComponent;