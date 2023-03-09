const Section = props => {
    return (
        <section className="mb-5">
            <h2>{props.title}</h2>
            {props.children}
        </section>
    )
}

export default Section