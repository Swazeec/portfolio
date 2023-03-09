import { Row } from "react-bootstrap"

import ProjectCard from "../components/UI/ProjectCard"

import countryQuiz from '../assets/projectsPictures/countryQuiz.jpg'
import adviceGen from '../assets/projectsPictures/adviceGenerator.jpg'
import timeTrack from '../assets/projectsPictures/timeTrackingBoard.jpg'
import pragma from '../assets/projectsPictures/pragmaToDo.jpg'
import hypnos from '../assets/projectsPictures/hotelApp.jpg'
import diceGame from '../assets/projectsPictures/diceGame.jpg'
import Section from "../components/UI/Section"

const Projects = () =>{
    return <Section title="Projets">
        <Row className="p-0 m-0 mt-5">
            <ProjectCard title='Quiz App' image={countryQuiz} tech='React / HTML / CSS / BS / API' github='https://github.com/Swazeec/quizApp' website='https://quiz-countries.netlify.app'/>
            <ProjectCard title='Advice Generator' image={adviceGen} tech='React / HTML / CSS / API' github='https://github.com/Swazeec/advicegenerator' website='https://small-advice-generator.netlify.app'/>
            <ProjectCard title='Time Tracking App' image={timeTrack} tech='React / HTML / CSS' github='https://github.com/Swazeec/timeTrackingDashboard' website='https://rainbow-valkyrie.netlify.app/'/>
            <ProjectCard title='Pragma ToDo App' image={pragma} tech='PHP / POO / MVC / MySQL' github='https://github.com/Swazeec/pragma' />
            <ProjectCard title='Hypnos Hotel Group' image={hypnos} tech='PHP / MySQL / JS / AJAX' github='https://github.com/Swazeec/hypnosHotelGroup' />
            <ProjectCard title='Dice Game' image={diceGame} tech='HTML / CSS / BS / JS' github='https://github.com/Swazeec/Venel-Soizic-javascript-dice-game' website='https://svenel-dice-game.netlify.app/'/>
        </Row>
    </Section>
}

export default Projects