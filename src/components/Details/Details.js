import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <h1>Details Page</h1>
                <hr></hr>
                {JSON.stringify(this.props.reduxStore.details)}
                <button onClick={(event) => this.props.history.push('/')}>Back to List</button>
                <button onClick={(event) => this.props.history.push('/edit')}>Edit</button>
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Details);