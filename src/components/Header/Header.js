import { useState } from "react"

import NavBar from "../Navigation/Navbar"
import classes from './Header.module.css'

import logo from '../../assets/logo.svg'
import PP from '../../assets/PP.png'
import burger from '../../assets/burger.svg'
import Socials from "../Navigation/Socials"
import { Offcanvas } from "react-bootstrap"


const Header = props => {
    
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const offCanvasNav = <Offcanvas show={show} onHide={handleClose} placement='end' className={classes.header}>
            <div onClick={handleClose} className={classes.close}>
                <i className="bi bi-x-lg"></i>
            </div>
            <NavBar onClick={handleClose}/>
            <Socials/>
        </Offcanvas>;

    return (<>
            <header className={`${classes.header} ${props.className} d-none d-lg-flex `}>
                <div className={classes.picture}>
                    <img src={PP} alt='profile'/>
                </div>
                <div className={classes.logo}>
                    <img className="img-fluid" src={logo} alt='logo'/> 
                </div>
                    <NavBar/>
                    <Socials/> 
            </header>
            <header className={`${classes.header} ${props.className} d-lg-none`}>
                <div className={classes.logo}>
                    <img className="img-fluid" src={logo} alt='logo'/> 
                </div>
                <div onClick={handleShow}>
                    <img src={burger} alt='burger' />
                </div>
                {show && offCanvasNav}
            </header>
        </>
    )
}

export default Header
