import { Row } from "react-bootstrap"

import ProjectCard from "../components/UI/ProjectCard"

import countryQuiz from '../assets/projectsPictures/countryQuiz.jpg'
import adviceGen from '../assets/projectsPictures/adviceGenerator.jpg'
import timeTrack from '../assets/projectsPictures/timeTrackingBoard.jpg'

const Projects = () =>{
    return <>
        <h2>Projets</h2>
        <Row className="p-0 m-0">
            <ProjectCard title='Quiz App' image={countryQuiz} tech='React / HTML / CSS / BS / API' github='https://github.com/Swazeec/quizApp' website='https://quiz-countries.netlify.app'/>
            <ProjectCard title='Advice Generator' image={adviceGen} tech='React / HTML / CSS / API' github='https://github.com/Swazeec/advicegenerator' website='https://small-advice-generator.netlify.app'/>
            <ProjectCard title='Time Tracking Ap' image={timeTrack} tech='React / HTML / CSS' github='https://github.com/Swazeec/timeTrackingDashboard' website='https://rainbow-valkyrie.netlify.app/'/>
        </Row>
    </>
}

export default Projects