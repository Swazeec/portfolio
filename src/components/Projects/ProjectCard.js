import { Col, Card } from "react-bootstrap"

import useShowDetails from "../../hooks/useShowDetails"
import ProjectModal from "./ProjectModal"

const ProjectCard = props => {

    const {onClickHandler, showDescription, details} = useShowDetails()

    return (
        <Col xs={12} md={6} xl={4} xxl={3} className="p-1 m-0">
                <Card className="h-100">
                    <Card.Body>
                        <h3><i className="bi bi-code"></i> {props.title}</h3>
                        <Card.Img src={props.image} alt={props.title}/>
                        <Card.Text  className="text-center tech">{props.tech}</Card.Text>
                        {props.description && !showDescription && <p className="detail text-center" onClick={onClickHandler}>{details}</p>}
                        {props.description && showDescription && <ProjectModal id={props.id} title={props.title} image={props.image} description={props.description} tech={props.tech} github={props.github} website={props.website} onClose={onClickHandler}/>}
                        <div className="text-center">
                            <Card.Link href={props.github} target="blank"><i className="bi bi-github link"></i></Card.Link>
                            {props.website && <Card.Link href={props.website} target="blank"><i className="bi bi-link-45deg link"></i></Card.Link>}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default ProjectCard