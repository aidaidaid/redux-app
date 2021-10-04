import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { addUser, saveChange, cancelEdit } from "../redux/actionsUser";

const Home = ({addUser, userInfo, isToClean, saveChange, cancelEdit}) => {
    const [name, setName] = useState(userInfo?.name);
    const [surname, setSurname] = useState(userInfo?.surname);
    const [nickname, setNickname] = useState(userInfo?.nickname);
    const [email, setEmail] = useState(userInfo?.email);
    const [age, setAge] = useState(userInfo?.age);
    const [gender, setGender] = useState(userInfo?.gender);
    const userToEditId = userInfo?.id;
    const [doClean, setDoClean] = useState(isToClean || 0);
    const history = useHistory();

    const handleAdd = (()=>{
        if (validateEmail(mail.value) || email == undefined || email == ''){
            if(name !== '' && name !== undefined && surname !== '' && surname !== undefined){
                setDoClean(isToClean+1);
                addUser({
                    name,
                    surname,
                    nickname,
                    email,
                    age,
                    gender
                })
                alert('User was added');
            } else alert('Fill in name and surname');
        } else {alert('Invalid email')}
    })

    const handleSave = () => {
        if (validateEmail(mail.value) || email == undefined || email == ''){
            if(name !== '' && name !== undefined && surname !== '' && surname !== undefined){
                setDoClean(isToClean+1);
                saveChange({
                    userToEditId,
                    name,
                    surname,
                    nickname,
                    email,
                    age,
                    gender
                })
                history.push('/users');
            } else alert('Fill in name and surname');
        } else {alert('invalid email')}
    }

    const handleCancel = () => {
        cancelEdit(1);
        history.push('/users');
    }

    useEffect(()=>{
        if(doClean !== 0){
            setName('');
            setSurname('');
            setNickname('');
            setEmail('');
            setAge('');
            setGender('');
        }
    }, [doClean])

    const mail = document.querySelector('input[name=email]');
    const validateEmail = (email) => {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    return(
        <div className='block'>
            <div className='form'>
                <input type='text' placeholder='Name' value={name} onChange={(e)=>(setName(e.target.value))}/>
                <input type='text' placeholder='Surname' value={surname} onChange={(e)=>(setSurname(e.target.value))}/>
                <input type='text' placeholder='Nickname' value={nickname} onChange={(e)=>(setNickname(e.target.value))}/>
                <input name='email' placeholder='Email' value={email} onChange={(e)=>(setEmail(e.target.value))}/>
                <input type='text' placeholder='Age' value={age} onChange={(e)=>(setAge(e.target.value))}/>
                {/* <input type='text' placeholder='Gender' value={gender} onChange={(e)=>(setGender(e.target.value))}/> */}
                <select onChange={(e)=>(setGender(e.target.value))}>
                    <option value="" disabled selected hidden>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <button onClick={handleAdd} style={{display: isToClean !== 0 ? 'block' : 'none'}}>Add</button>
                <div className='changeBtns' style={{display: isToClean == 0 ? 'block' : 'none'}}>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>    
    )
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userToEdit,
    isToClean: state.isToClean,   
  };
}

const mapDispatchToProps = (dispatch) => {
    return({
        addUser: (data) => dispatch(addUser(data)),
        saveChange: (data) => dispatch(saveChange(data)),
        cancelEdit: (isToClean) => dispatch(cancelEdit(isToClean)),
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);