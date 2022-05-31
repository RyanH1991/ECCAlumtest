import * as AdminAPIUtil from '../util/admins_util'

export const RECEIVE_ALL_ADMINS = 'RECEIVE_ALL_ADMINS'
export const RECEIVE_ADMIN = 'RECEIVE_ADMIN'
export const SEARCH_ADMINS = 'SEARCH_ADMINS'


export const receiveSearchedAdmins = (searchResult) => ({
    type: SEARCH_ADMINS,
    searchResult
})

const receiveAllAdmins = (admins) => ({
    type: RECEIVE_ALL_ADMINS,
    admins

})

const receiveAdmin = (admin) => ({
    type: RECEIVE_ADMIN,
    admin
})

export const fetchAdmins = () => dispatch =>(
    AdminAPIUtil.fetchAdmins()
    .then(admins => dispatch(receiveAllAdmins(admins)))
)

export const fetchAdmin = (adminId) => dispatch => (
    AdminAPIUtil.fetchAdmin(adminId)
        .then(admin => dispatch(receiveAdmin(admin)))
)

export const searchAdmins = (search) => dispatch => (
    AdminAPIUtil.searchAdmins(search)
        .then(searchResult => dispatch(receiveSearchedAdmins(searchResult)))
)