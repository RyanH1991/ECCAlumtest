import * as UserAPIUtil from '../util/users_util'

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const SEARCH_USERS = 'SEARCH_USERS'


export const receiveSearchedUsers = (searchResult) => ({
    type: SEARCH_USERS,
    searchResult
})

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users

})

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const fetchUsers = () => dispatch =>(
    UserAPIUtil.fetchUsers()
    .then(users => dispatch(receiveAllUsers(users)))
)

export const fetchUser = (userId) => dispatch => (
    UserAPIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
)

export const searchUsers = (search) => dispatch => (
    UserAPIUtil.searchUsers(search)
        .then(searchResult => dispatch(receiveSearchedUsers(searchResult)))
)