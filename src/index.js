import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import Axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    // TO-DO - add sagas here:
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('EDIT_LIST', editList);
}

function* fetchMovies() {
    try {
        // Save the response from the server in a variable
        const response = yield Axios.get('/movies');
        // Then you can pass the response data to the reducer
        yield put ({type: 'SET_MOVIES', payload: response.data});
    } catch (error) {
        console.log('Error getting movies', error);
        alert('Could not get Movies at this time. Try again later.');
    }
}

function* fetchDetails(action) {
    try {
        const response = yield Axios.get(`/movies/${action.payload}`);
        yield put ({type: 'SET_DETAILS', payload: response.data});
    } catch (error) {
        console.log('Error getting details', error);
        alert('Could not get movie details at this time. Try again later.');
    }
}

function* editList(action) {
    try {
        yield Axios.put(`/movies/update/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_MOVIES'})
    } catch (error) {
        console.log('Error updating Movie List', error);
        alert('Could not update movie list at this time. Try again later.');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store details from the server
const details = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
            default:
                return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
