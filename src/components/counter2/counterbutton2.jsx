import React , {Component} from 'react';
import PropTypes from 'prop-types'

export default class CounterButton2 extends Component{
    render(){
        return(
            <div>
                <button onClick={() => this.props.incrementMethod(this.props.by)}> + {this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}> - {this.props.by}</button>
            </div>
        )
    }
}

CounterButton2.defaultProps = {
    by : 1
}

CounterButton2.propTypes = {
    by : PropTypes.number
}