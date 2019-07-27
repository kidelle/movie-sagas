import React, { Component } from 'react';


class Edit extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <h1>Edit Page</h1>
                <input type="text" placeholder="Movie Title"></input>
                <input type="text" placeholder="Description"></input>
                <button onClick={(event) => this.props.history.push('/')}>Cancel</button>
                <button onClick={(event) => this.props.history.push('/')}>Save</button>
            </div>
        );
    }
}

export default Edit;