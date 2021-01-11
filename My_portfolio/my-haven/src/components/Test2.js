import React from 'react'
import '../css/Test2.css'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'



function Test2() {
    return (
        <div className='test2'>
            <Link to='/'>
            <img className='test_icon' src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png' alt=''/>
            </Link>

            <div className='test_center'>
                <input type='text' placeholder='Start your search'/>
                <div className='searchIconTest_div'>
                <SearchIcon className='searchTest_icon'/>
                </div>
            </div>

            <div className='test_right'>
                <p>Become a host</p>
                < LanguageIcon />
                < ExpandMoreIcon />
                < Avatar />

            </div>
            
        </div>
    )
}


export default Test2
