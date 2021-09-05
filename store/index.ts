import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {productReducer} from "./reducers/product.reducer";


const rootReducers = combineReducers({
    product:productReducer
})

export const store = createStore(rootReducers,applyMiddleware(thunk))

type rootReducer = ReturnType<typeof rootReducers>