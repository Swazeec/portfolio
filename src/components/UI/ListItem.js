import { useState } from "react"

const ListItem = props => {

    const [showDescription, setShowDescription] = useState(false)
    const onClickHandler = ()=> {
        showDescription ? setShowDescription(false) : setShowDescription(true)
    }

    let details = !props.description ? '': showDescription ? <><i className="bi bi-dash-circle"></i> Réduire</>: <><i className="bi bi-plus-circle"></i> En savoir plus</>

    let h3Classes = props.dates ? 'mb-0' : ''
    let subtitleClasses = props.dates ? 'text-secondary mb-1' : props.description ? 'mb-1' : ''

    return (
       <li>
            <h3 className={h3Classes} >{props.title}</h3>
            <p className={subtitleClasses}>{props.subtitle}</p>
            {props.dates && <p className="mb-0">{props.dates}</p>}
            {props.description && <p className="detail" onClick={onClickHandler}>{details}</p>}
            {props.description && showDescription && <ul className="mb-4 descList">{props.description.map(item => <li key={props.description.indexOf(item)}>{item}</li>)}</ul>}
       </li>
    )
}

export default ListItem