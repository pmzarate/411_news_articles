import { combineReducers } from 'redux'

const articles = (state = [], action) => {
    switch(action.type) {
        // add case "FETCH_ARTICLES"
        default:
            return state
    }
}

export default combineReducers({ articles })