export const fetchAdmins = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/admins'
    });
}
  
export const fetchAdmin = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/admins/${id}`,
    });
}

export const searchAdmins = (search) => (
    $.ajax({
        method: "GET",
        url: `/api/search`,
        data: {search}
    })
)