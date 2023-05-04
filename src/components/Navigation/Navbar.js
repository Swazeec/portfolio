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
                    <a href='../../assets/Venel_Soizic-CV-dev_web.pdf' download>cv</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 