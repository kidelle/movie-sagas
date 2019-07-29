import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {
   
backButton = (event) => {
    this.props.history.push('/')
}

editButton = (event) => {
    this.props.history.push('/edit')
}

    render() {
        let details = this.props.reduxStore.details;

        return (
            <>
            <div className="App">
                <h1>Movie Details</h1>
                <hr></hr>
                {JSON.stringify(this.props.reduxStore.details)}
                <button onClick={this.backButton}type="submit">Back to List</button>
                <button onClick={this.editButton}type="submit">Edit</button>
            </div>
            <div>
                <p>Movie Details:</p>
                <p>{details.title}</p>
                <p>{details.description}</p>
                <p>{details.name}</p>
            </div>
            </>
        );
        
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Details);