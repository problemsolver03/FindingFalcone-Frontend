import React from 'react';
import NavItem from './NavItem';
import { Link} from 'react-router-dom'

export default function MobileMenu({toggleMenu}) {
    return (
        <ul>
          <li className="text-right">
            <span onClick={toggleMenu}>X Close</span>
          </li>
          <NavItem className='item'>
             <Link className="nav-link" to="/">
                Home 
              </Link>
            </NavItem>
            <NavItem url="https://www.geektrust.in/" text="Geek Trust" className='item'/>
            
            </ul>
    )
}
