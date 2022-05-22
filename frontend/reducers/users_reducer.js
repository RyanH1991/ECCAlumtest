import { RECEIVE_ALL_USERS, RECEIVE_USER, SEARCH_USERS} from '../actions/user_actions'
// import {CLEAR_FORM} from '../actions/search_actions'

const usersReducer = (state={}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_ALL_USERS:
            return action.users
        case RECEIVE_USER:
            newState[action.user.id] = action.user
            return newState[action.user.id]
        case SEARCH_USERS:
            return action.searchResult
        // case CLEAR_FORM:
        //     return {}
        default: return state
    }
}

export default usersReducer