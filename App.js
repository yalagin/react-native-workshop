import * as React from 'react';
import {createStore, applyMiddleware, combineReducers, compose, Store} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import MainNavigation from "./Navigation/MainNavigation";
import drivers from "./store/reducers/drivers"
import racing from "./store/reducers/racing"

const rootReducer = combineReducers({
    drivers,
    racing
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
    return (
        <Provider store={store}>
           <MainNavigation/>
        </Provider>
    );
}

export default App;