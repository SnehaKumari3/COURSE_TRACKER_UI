import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Import Redux Thunk middleware
import rootReducer from './reducers'; // Import your root reducer

// Create the Redux store with Thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
