import { createStore } from 'redux';

import rootReducers from './reducers/index';

const store = createStore(rootReducers);
// this is global centralised store

export default store;
