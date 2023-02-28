import { NavLink } from "react-router-dom"

import classes from './Socials.module.css'


const Socials = () => {
    return (
        <div className={classes.socials}>
            <NavLink to='https://github.com/Swazeec/'><i className="bi bi-github"></i></NavLink>
            <NavLink to='https://github.com/Swazeec/'><i className="bi bi-linkedin"></i></NavLink>
            <NavLink to='https://github.com/Swazeec/'><i className="bi bi-envelope"></i></NavLink>
            <NavLink to='https://github.com/Swazeec/'><i className="bi bi-phone"></i></NavLink>
        </div>
    )
}

export default Socials