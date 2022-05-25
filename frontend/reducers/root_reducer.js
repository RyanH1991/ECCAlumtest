import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import searchReducer from './search_reducer';
// import sessionReducer from './session';
// import entitiesReducer from './entities';

export default combineReducers({
//   entities: entitiesReducer,
//   session: sessionReducer
    users: usersReducer,
    search: searchReducer
});