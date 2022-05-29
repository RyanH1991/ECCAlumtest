import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import adminsReducer from './admins_reducer';
import searchReducer from './search_reducer';
// import sessionReducer from './session';
// import entitiesReducer from './entities';

export default combineReducers({
//   entities: entitiesReducer,
//   session: sessionReducer
    admins: adminsReducer,
    users: usersReducer,
    search: searchReducer
});