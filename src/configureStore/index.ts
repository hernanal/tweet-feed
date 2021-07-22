import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../model/reducers';

const configureStore = (preloadedState?: any) => {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer];
    const composedEnhancers: StoreEnhancer<unknown, {}> = compose(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    return store;
}

export default configureStore;