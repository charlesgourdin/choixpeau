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
        setInterval(() =>  this.props.dispatch({ type:  '' }), 1000)
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

const mapStateToProps = state => ({
    houses: state.houses,
    selectedHouses: state.selectedHouses
})

export default connect(mapStateToProps)(Result)

// export default connect(store => store)(Result)

// setInterval(() =>  this.props.dispatch({ type:  '' }), 1000)


