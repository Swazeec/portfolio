import useShowDetails from "../../hooks/useShowDetails"

const ListItem = props => {

    const {onClickHandler, showDescription, details} = useShowDetails()

    let h3Classes = props.dates ? 'mb-0' : ''
    let subtitleClasses = props.dates ? 'text-secondary mb-1' : props.description ? 'mb-1' : ''

    return (
       <li>
            <h3 className={h3Classes} >{props.title}</h3>
            <p className={subtitleClasses}>{props.subtitle}</p>
            {props.dates && <p className="mb-0">{props.dates}</p>}
            {props.intro && <p className="intro">{props.intro}</p>}
            {props.description && <p className="detail" onClick={onClickHandler}>{details}</p>}
            {props.description && showDescription && <ul className="mb-4 descList">{props.description.map(item => <li key={props.description.indexOf(item)}>{item}</li>)}</ul>}
       </li>
    )
}

export default ListItem