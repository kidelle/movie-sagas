import React, { Component } from 'react';
import { connect } from 'react-redux';

// import routes to other views
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class MovieList extends Component {

    

    componentDidMount() {
        this.props.dispatch({type:'FETCH_MOVIES'});
    }

    onChange = (item) => {
        console.log(item.id);
        this.props.dispatch( {type: 'FETCH_DETAILS', payload: item.id} );
        this.props.history.push('/details')
    }

    
    render() {
    
        return (
          
            <>
                <div className="App">
                    <div>
                    <h1>Movie List</h1>
                    <hr></hr>
                        {this.props.reduxStore.movies.map(item => {
                            return (
                                <div key={item.id}>
                                <p>{item.title}<br />{item.description}</p>
                               
                                <img onClick={(event) => this.onChange(item)} src={item.poster} />
                                </div>
                            )
                        })}
                    </div>

                </div>
            </>

          
      );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(MovieList);