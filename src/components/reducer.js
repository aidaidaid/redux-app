const initialState = {
    users: [],
    id: 1,
    count: 0,
    userToEdit: {},
    isToClean: 1,
}

export const reducer = (state = initialState, action) => {
    // console.log(state, 'oooo')
    switch(action.type) {
        case 'ADD_USER':
            action.payload.id = state.id;
                return {
                    ...state,
                    users: [...state.users, action.payload],
                    id: state.id + 1,
                    count: state.count + 1,
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
            return {  
                ...state,            
                users: state.users.map((item)=>{
                if (item.id == action.payload.userToEditId){
                    return action.payloadı;
                }
                return item;
            })
        }
        default:
        return state
    }
}