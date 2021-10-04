export const addUser = (data) => {
    return({
        type: 'ADD_USER',
        payload: data,
    })
}

export const deleteUser = (id) => {
    return({
        type: 'DELETE_USER',
        payload: id,
    })
}

export const editUser = (id) => {
    return({
        type: 'EDIT_USER',
        payload: id,
    })
}

export const saveChange = (data) => {
    return({
        type: 'SAVE_CHANGE',
        payload: data,
    })
}

export const cancelEdit = (cancel) => {
    return({
        type: 'CANCEL_EDIT',
        payload: cancel, 
    })
} 
