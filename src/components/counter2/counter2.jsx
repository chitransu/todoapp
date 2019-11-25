import React , {Component} from 'react';
import '../counter/counter.css'
import CounterButton2 from './counterbutton2'

class Counter2 extends Component{
  
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }

    render(){
        return(
            <div>
                <h1>Counter Application</h1>
                <CounterButton2 by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton2 by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>  
                <CounterButton2 by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>             
                <span className='count'>{this.state.counter}</span>
                <div><button className='reset' onClick = {this.reset}>Reset</button></div>
            </div>
        );
    }

    increment(by){
        this.setState((prevState) => {
                return {counter : prevState.counter + by}
        })
    }

    decrement(by){
        this.setState((prevState) => {
           return {counter : prevState.counter - by} 
        })
    }

    reset(){
        this.setState({
            counter : 0
        })
    }
}

export default Counter2;