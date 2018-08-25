import React from 'react'
import './index.css'

const searchResult = props => (
    <div key={props.user.id}
         className={props.active && props.active.login === props.user
             ? `active results`
             : 'inactive results'}
         onKeyDown={props.keyPress}
         tabIndex='0'>
        <img src={props.avatar} alt='avatar' className='search-avatar'/>
        <span onClick={(e) => props.handleUserClick(e)}>{props.user}</span>
    </div>
)

export default searchResult