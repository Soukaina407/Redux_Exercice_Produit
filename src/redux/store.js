import { legacy_createStore } from "redux";
import articleReducer from "./reducers/articleReducer";

const store = legacy_createStore(articleReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store