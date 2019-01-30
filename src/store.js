import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {characterReducer} from './reducers';

export default createStore(
    characterReducer,
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);




// import {createStore, applyMiddleware , compose} from 'redux';
// import thunk from 'redux-thunk';
// import {characterReducer} from './reducers';


// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

//     const enhancer = composeEnhancers(
//         applyMiddleware(thunk),
//       );

// export default createStore(
//    composeEnhancers( characterReducer,
//     enhancer)
// );
