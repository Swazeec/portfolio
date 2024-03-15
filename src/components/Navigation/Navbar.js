import { NavLink } from "react-router-dom"

import classes from './Navbar.module.css'

const Navbar = props =>{
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.navlink}>
                    <NavLink to='/' onClick={props.onClick} className={({isActive})=>isActive? classes.active : undefined} end>à propos</NavLink>
                </li>
                <li className={classes.navlink}>
                    <NavLink to='/projects' onClick={props.onClick} className={({isActive})=>isActive? classes.active : undefined} end>projets</NavLink>
                </li>
                <li className={classes.navlink}>
                    <NavLink to='/contact' onClick={props.onClick} className={({isActive})=>isActive? classes.active : undefined} end>contact</NavLink>
                </li>
                <li className={classes.navlink}>
                    <a href='https://drive.google.com/file/d/1yk-izB7oVdMPdUXMfT9_V3CW5vfgVlnJ/view?usp=sharing' target="blank">cv</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 