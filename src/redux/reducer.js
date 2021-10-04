const initialState = {
    users: [],
    id: 1,
    count: 0,
    userToEdit: {},
    isToClean: null,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            action.payload.id = state.id;
                return {
                    ...state,
                    users: [...state.users, action.payload],
                    id: state.id + 1,
                    count: state.count + 1,
                    isToClean: state.isToClean + 1,
                }
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter((item)=> item.id != action.payload),
                count: state.count - 1,
            }
        case 'EDIT_USER':
            return {
                ...state,
                userToEdit: state.users.find((item)=> item.id == action.payload),
                isToClean: 0,
            }
        case 'SAVE_CHANGE':
            action.payload.id = state.userToEdit.id;
            return {  
                ...state,
                isToClean: state.isToClean + 1,
                users: state.users.map((item)=>{
                if (item.id == action.payload.userToEditId){
                    return action.payload;
                }
                return item;
            })
        }
        case 'CANCEL_EDIT':
            return {
                ...state,
                isToClean: action.payload, 
            }
        default:
        return state
    }
}