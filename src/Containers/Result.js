import React, { useState } from 'react';
import Message from '../Components/Message'
import { connect } from 'react-redux'

const Result = ({ houses, selectedHouses, dispatch }) => {

    let [house, changeHouse] = useState(selectedHouses)

    return (
        <div>
            <ul>
                {houses.map(house => <li key={house}>{house}</li>)}
            </ul>
            <Message message={selectedHouses} />
        </div>
    )
}

const mapStateToProps = state => ({
    houses: state.houses,
    selectedHouses: state.selectedHouses
})

export default connect(mapStateToProps)(Result)

// export default connect(store => store)(Result)

// setInterval(() =>  this.props.dispatch({ type:  '' }), 1000)