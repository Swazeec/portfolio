import { Col, Card } from "react-bootstrap"


const ProjectCard = props => {
    return (
        <Col xs={12} md={6} xl={4} xxl={3} className="p-1 m-0">
                <Card className="h-100">
                    <Card.Body>
                        <h3><i className="bi bi-code"></i> {props.title}</h3>
                        <Card.Img src={props.image}/>
                        <Card.Text  className="text-center tech">{props.tech}</Card.Text>
                        <div className="text-center">
                            <Card.Link href={props.github} target="blank"><i className="bi bi-github"></i></Card.Link>
                            {props.website && <Card.Link href={props.website} target="blank"><i className="bi bi-link-45deg"></i></Card.Link>}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default ProjectCard