import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

const Header = ({usersCount}) => {
    return(
        <div className='menu'>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users: {usersCount}</Link>
            {/* <span>{usersCount}</span> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        usersCount: state.count 
    })
}

export default connect(mapStateToProps)(Header) ;