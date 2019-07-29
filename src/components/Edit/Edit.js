import React, { Component } from 'react';
import { connect } from 'react-redux';


class Edit extends Component {
    
    state = {
        id: this.props.reduxStore.details.id,
        title: '',
        description: '',
    }

    cancelButton = (event) => {
        this.props.history.push('/details')
    }

    saveButton = (event) => {
        this.props.history.push('/')
        this.props.dispatch( {type: 'EDIT_MOVIE', payload: this.state} )
    }

    handleChange = (propertyName, event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        })
    }

    handleSubmit = () => {
        this.props.dispatch( {type: 'UPDATE_DETAILS', payload: this.state} )
        this.props.history.push('/details')
    }

    render() {
        return (
            <div className="App">
                <h1>Edit Movie Title & Description</h1>
                <hr></hr>
                <input type="text" value={this.state.title} 
                onChange={ (event) => this.handleChange('title', event) }
                placeholder="Movie Title"></input>
                
                <input type="text" value={this.state.description}
                onChange={ (event) => this.handleChange('description', event) }
                placeholder="Description"></input>
                
                <button onClick={this.cancelButton}type="submit">Cancel</button>
                
                <button onClick={this.saveButton}type="submit">Save</button>
            </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Edit);