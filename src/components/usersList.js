import React from "react";
import { connect } from "react-redux";
import { deleteUser, editUser} from "./actionsUser";
import { useHistory } from "react-router";

const Users = ({usersList, editItem, deleteItem}) => {
    const history = useHistory();
    
    const editInfo = ((id, isToClean)=>{
        history.push('/');
        editItem(id, isToClean);
        // document.getElementById('changeBtns').style.display = 'block';
        // console.log(document.getElementById('changeBtns').value);
    })

    return(
        <div>        
            {usersList.map(item => 
                (<div className='userCard'>
                    <div className='userInfo'>
                        {item.name && <div>Name: {item.name}</div>}
                        {item.surname && <div>Surname: {item.surname}</div>}
                        {item.nickname && <div>Nickname: {item.nickname}</div>}
                        {item.email && <div>Email: {item.email}</div>}
                        {item.age && <div>Age: {item.age}</div>}
                        {item.gender && <div>Gender: {item.gender}</div>}
                    </div>
                    <div className='userBtns'>
                        {/* <button onClick={()=>editItem(item.id)}>Edit</button> */}
                        <button onClick={()=>editInfo(item.id, 0)}>Edit</button>
                        {/* <button onClick={()=>history.push('/')}>Edit</button> */}
                        <button onClick={()=>deleteItem(item.id)}>Delete</button>
                    </div>
                </div>)
            )}
        </div> 
    )
}

const mapStateToProps = (state) => {
    return({
        usersList: state.users,
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        editItem: (id, isToClean) => dispatch(editUser(id, isToClean)),
        deleteItem: (id) => dispatch(deleteUser(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Users) ;