import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
// Logger lets me see my the cool stuff my other stuff is doing
import logger from 'redux-logger';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

// ----- END IMPORTS ----- //


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery( `GET_MOVIES`, getMoviesSaga );
    yield takeEvery( `GET_DETAILS`, getDetailsSaga );
    yield takeEvery( `GET_GENRES`, getGenresSaga );
}


// BEGIN SAGAS //

// GET Movies from the DB
function* getMoviesSaga() {
    try{
        const response = yield axios.get(`/movies`);
        yield put({ type: 'SET_MOVIES', payload: response.data })
    } catch(error) {
        console.log(error);
    }
}

// GET specific movie id when click on movie poster
function* getDetailsSaga(action) {
    // shrinking payload
    let id = action.payload.id;
    try {
        const response = yield axios.get(`/movies/${id}`);
        yield put({ type: 'SET_DETAILS', payload: response.data })
    }
    catch ( error ){
        console.log('error getting movie details', error );
    }
}

// GET genres from server and send to reducer
function* getGenresSaga(action) {
    let id = action.payload.id;
    try{
        const response = yield axios.get(`/genres/${id}`);
        yield put({type: 'SET_GENRES', payload: response.data })
    }
    catch ( error ) {
        console.log('error getting genre data', error);
    }

}

// END SAGAS // 

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// used to store movie details
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;    
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}




// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        details,
        movies,
        genres,
        
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
