import { RECEIVE_ALL_ADMINS, RECEIVE_ADMIN, SEARCH_ADMINS} from '../actions/admin_actions'
// import {CLEAR_FORM} from '../actions/search_actions'

const adminsReducer = (state={}, action) => {
    Object.freeze(state)
    // debugger
    const newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_ALL_ADMINS:
            return action.admins
        case RECEIVE_ADMIN:
            newState[action.admin.id] = action.admin
            return newState[action.admin.id]
        case SEARCH_ADMINS:
            return action.searchResult
        // case CLEAR_FORM:
        //     return {}
        default: return state
    }
}

export default adminsReducer