export const fetchUsers = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/users'
    });
}
  
export const fetchUser = id => {
    return $.ajax({
        url: `/api/users/${id}`,
        method: 'GET',
    });
}

export const searchUsers = (search) => (
    $.ajax({
        method: "GET",
        url: `/api/search`,
        data: {search}
    })
)