import React, { Component } from 'react'
import CounterButton from './counterbutton'
import PropTypes from 'prop-types'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            counter :0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div>
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                {/*<CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>*/}
                <span className="count">{this.state.counter}</span>
                <div> <button className="reset" onClick = {this.reset}>Reset</button> </div>
            </div>
        )
    }

    increment(abc) {
        console.log(`Increment from Parent - ${abc}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + abc }
            }
        );
    }

    decrement(abc) {
        console.log(`Decrement from Parent - ${abc}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - abc }
            }
        );
    }

    reset() {
        this.setState({
            counter : 0
        })
    }
}

export default Counter

//Counter.propTypes = {
  ////  by : PropTypes.number
//}