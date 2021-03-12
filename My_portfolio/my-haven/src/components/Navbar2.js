import React from 'react'
import '../css/Test2.css'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../My haven Logo.svg'



function Test2() {
    return (
        <div className='test2'>
            <Link to='/'>
            <Logo alt='logo' className='test_icon' />
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
