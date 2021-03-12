import React from 'react'
import '../css/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../My haven Logo.svg'



function Header() {
    return (
        <div className='header'>
            <Link to='/'>
            <Logo alt='logo' height='150px' className='header_icon'/>
            </Link>

            <div className='header_center'>
                <input type='text' placeholder='Start your search'/>
                <div className='searchIcon_div'>
                <SearchIcon className='search_icon'/>
                </div>
            </div>

            <div className='header_right'>
                <p>Become a host</p>
                < LanguageIcon />
                < ExpandMoreIcon />
                < Avatar />

            </div>
            
        </div>
    )
}

export default Header
