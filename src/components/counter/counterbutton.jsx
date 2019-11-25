import React , {Component} from 'react';
import PropTypes from 'prop-types'
import './counter.css'

export default class CounterButton extends Component {

    render(){
        const {incrementMethod,decrementMethod,by} = props;
        return(
            <div className="counter">
                <button onClick={() => incrementMethod(by)}>+{by}</button>
                <button onClick={() => decrementMethod(by)}>-{by}</button>
                {/*<span className="count">{this.state.counter}</span>*/}
            </div>
        )
    }
}
CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

   // constructor(){
       // super()
        // this.state = {
        //     counter :0
        // }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
   // }

      // increment() {
        // this.setState(
        //     (prevState) => {
        //     return {counter : prevState.counter + this.props.by}
        //   }
        // );
        //this.props.incrementMethod(this.props.by);
    //}

    //decrement() {
        // this.setState(
        //     (prevState) => {
        //     return {counter : prevState.counter + this.props.by}
        //   }
        // );
       // this.props.decrementMethod(this.props.by);
   // }