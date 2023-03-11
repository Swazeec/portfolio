import { useState } from "react"

const ListItem = props => {

    const [showDescription, setShowDescription] = useState(false)
    const onClickHandler = ()=> {
        showDescription ? setShowDescription(false) : setShowDescription(true)
    }


    let chevron = !props.description ? '': showDescription ? <span>  <i className="bi bi-chevron-compact-up"></i></span> : <span>  <i className="bi bi-chevron-compact-down"></i></span>

    let h3Classes = props.dates ? 'mb-0' : ''
    let pClasses = props.dates ? 'text-secondary mb-1' : ''

    return (
       <li>
            <h3 className={h3Classes} onClick={onClickHandler}>{props.title}{chevron}</h3>
            <p className={pClasses}>{props.subtitle}</p>
            {props.dates && <p>{props.dates}</p>}
            {props.description && showDescription && <ul className="mb-4 descList">{props.description.map(item => <li key={props.description.indexOf(item)}>{item}</li>)}</ul>}
       </li>
    )
}

export default ListItem