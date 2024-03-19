import { Row } from "react-bootstrap"

import ProjectCard from "../components/Projects/ProjectCard"
import myProjects from "../assets/content/myProjects"

import Section from "../components/UI/Section"

const Projects = () =>{

    const reversedArray = [...myProjects].reverse()
    const content = reversedArray.map(item => <ProjectCard key={item.id} id={item.id} title={item.title} projectDate={item.projectDate} image={item.image} tech={item.tech} github={item.github} website={item.website} description={item.description}/> )

    return <Section title="Projets">
        <Row className="p-0 m-0 mt-5">
            {content}
        </Row>
    </Section>
}

export default Projects