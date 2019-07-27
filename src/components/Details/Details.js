import React, { Component } from 'react';


class Details extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <h1>Details Page</h1>
                <button>Back to List</button>
                <button>Edit</button>
            </div>
        );
    }
}

export default Details;