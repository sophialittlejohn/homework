import React from 'react'
import './index.css'
import userNotFound from '../../assets/images/user_not_found.png'

const searchResult = props => (
    <div className={props.active && props.active.login === props.user
             ? `active results`
             : 'inactive results'}
         onKeyDown={props.keyPress}
         tabIndex='0'>
        <img src={props.avatar !== undefined ? props.avatar : userNotFound} alt='avatar' className='result-avatar'/>
        <span onClick={(e) => props.handleUserClick(e)}>{props.user}</span>
    </div>
)

export default searchResult