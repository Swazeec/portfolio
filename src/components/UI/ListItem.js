const ListItem = props => {

    let h3Classes = props.dates ? 'mb-0' : ''
    let pClasses = props.dates ? 'text-secondary mb-1' : ''
    return (
       <li>
            <h3 className={h3Classes}>{props.title}</h3>
            <p className={pClasses}>{props.subtitle}</p>
            {props.dates && <p>{props.dates}</p>}
       </li>
    )
}

export default ListItem