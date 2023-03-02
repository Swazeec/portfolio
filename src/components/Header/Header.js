import NavBar from "../Navigation/Navbar"
import classes from './Header.module.css'

import logo from '../../assets/logo.svg'
import PP from '../../assets/PP.png'
import Socials from "../Navigation/Socials"


const Header = props => {

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
        </>
    )
}

export default Header
