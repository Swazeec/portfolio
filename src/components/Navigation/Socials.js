import classes from './Socials.module.css'


const Socials = () => {
    return (
        <div className={classes.socials}>
            <a href='https://github.com/Swazeec/'><i className="bi bi-github"></i></a>
            <a href='https://www.linkedin.com/in/soizic-venel/'><i className="bi bi-linkedin"></i></a>
            <a href='mailto:venel.soizic@hotmail.fr'><i className="bi bi-envelope"></i></a>
            <a href='tel:0683781954'><i className="bi bi-phone"></i></a>
        </div>
    )
}

export default Socials