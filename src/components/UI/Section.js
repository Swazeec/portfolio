import ListItem from "../About/ListItem"

const Section = props => {
    return (
        <section className="mb-5">
            <h2>{props.title}</h2>
            {!props.list && props.children}
            {props.list && <ul>
{                props.list.map(item => <ListItem key={item.id} title={item.title} subtitle={item.subtitle} dates={item.dates} intro={item.intro} description={item.description} />)
}                </ul>}
        </section>
    )
}

export default Section