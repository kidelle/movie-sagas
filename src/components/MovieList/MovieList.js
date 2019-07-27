import React, { Component } from 'react';
import { connect } from 'react-redux';

// import routes to other views
import Details from '../Details/Details';
import Edit from '../Edit/Edit';



class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({type:'FETCH_MOVIES'});
    }

    
    render() {
        let item = this.props.item;
        return (
          
            <>
                <div className="App">
                    
                  
                    <div>
                        {this.props.reduxStore.movies.map(item => {
                            return (
                                <div>
                                <p key={item.id}>{item.title}{item.description}</p>
                               
                                <img src={item.poster} />
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