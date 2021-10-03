import React, { useState, useEffect } from "react";
import { findDOMNode } from "react-dom";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addUser, editUser, saveChange } from "../redux/actionsUser";
// import { reducer } from "..redux/reducer";

const Home = ({addUser, userInfo, myisToClean, saveChange}) => {
    const [name, setName] = useState(userInfo?.name);
    const [surname, setSurname] = useState(userInfo?.surname);
    const [nickname, setNickname] = useState(userInfo?.nickname);
    const [email, setEmail] = useState(userInfo?.email);
    const [age, setAge] = useState(userInfo?.age);
    const [gender, setGender] = useState(userInfo?.gender);
    // const [name, setName] = useState('');
    // const [surname, setSurname] = useState('');
    // const [nickname, setNickname] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState('');
    // const [gender, setGender] = useState('');
    const [userToEditId, setUserToEditId] = useState(userInfo?.id);
    const [isToClean, setIsToClean] = useState(myisToClean); //||0
    // setIsToClean(myisToClean);

    const history = useHistory();
    console.log(history.location.pathname)
    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }

    const handleAdd = (()=>{
        // setIsToClean(isToClean + 1);
        myisToClean = myisToClean + 1;
        setIsToClean(myisToClean);
        addUser({
            name,
            surname,
            nickname,
            email,
            age,
            gender
        })
    })

    const handleSave = () => {
        // setIsToClean(1);
        myisToClean = myisToClean + 1;
        setIsToClean(myisToClean);
        saveChange({
            userToEditId,
            name,
            surname,
            nickname,
            email,
            age,
            gender
        })
    }

    const handleCancel = () => {
        setIsToClean(1);
    }

    useEffect(()=>{
        if(isToClean !== 0){
            setName('');
            setSurname('');
            setNickname('');
            setEmail('');
            setAge('');
            setGender('');
        } /*else {
            setName(userInfo?.name);
            setSurname(userInfo?.surname);
            setNickname(userInfo?.nickname);
            setEmail(userInfo?.email);
            setAge(userInfo?.age);
            setGender(userInfo?.gender);
        }*/
    }, [isToClean])

    return(
        <div className='block'>
            <div className='form'>
                <input type='text' placeholder='Name' value={name} onChange={(e)=>(setName(e.target.value))}/>
                <input type='text' placeholder='Surname' value={surname} onChange={(e)=>(setSurname(e.target.value))}/>
                <input type='text' placeholder='Nickname' value={nickname} onChange={(e)=>(setNickname(e.target.value))}/>
                <input type='email' placeholder='Email' value={email} onChange={(e)=>(setEmail(e.target.value))}/>
                <input type='text' placeholder='Age' value={age} onChange={(e)=>(setAge(e.target.value))}/>
                <input type='text' placeholder='Gender' value={gender} onChange={(e)=>(setGender(e.target.value))}/>
                <button onClick={handleAdd} >Add</button>
                <div className='changeBtns' style={{display: isToClean == 0 ? 'block' : 'none' }}>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
                {/* disabled={!isToClean} */}
            </div>
            <div className='popUp'>Пользоатель добавлени в базу</div>
        </div>    
    )
}

const mapStateToProps = (state) => {
console.log(state.users)
console.log(state.count, 'count')
console.log(state.id, 'id')
console.log(state.userToEdit,'usertoedit');
  return {
    userInfo: state.userToEdit,
    myisToClean: state.isToClean,   
  };
}

//unmount useeffect ?home?

const mapDispatchToProps = (dispatch) => {
    return({
        addUser: (data) => dispatch(addUser(data)),
        saveChange: (data) => dispatch(saveChange(data)),
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);