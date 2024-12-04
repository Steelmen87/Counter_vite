import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer.ts";

const rootReducer = combineReducers({
    counter: counterReducer
})
let preloadedState;
const persistedCounterString = localStorage.getItem('app-counter')
if(persistedCounterString){
    preloadedState = JSON.parse(persistedCounterString)
}
export const store = legacy_createStore(rootReducer,preloadedState)

store.subscribe(() => {
    localStorage.setItem('app-counter',JSON.stringify(store.getState()))
})
export type RootState = ReturnType<typeof store.getState>
export type appDispatchType = ReturnType<typeof store.dispatch>