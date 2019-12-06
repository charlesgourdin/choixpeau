import React, { Component } from 'react';
import Message from '../Components/Message'
import { connect } from 'react-redux'

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    componentDidMount=()=>{
        setInterval(() =>  this.props.dispatch({ type:  'UPDATE_CHOICE_WITH_MY_INDEX' , indexSelected: Math.floor(Math.random() * 4)}), 1000)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.houses.map(house => <li key={house}>{house}</li>)}
                </ul>
                <Message message={this.props.selectedHouses} />
            </div>
        )
    }
}

export default connect(store=>store)(Result)


