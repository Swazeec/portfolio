import { Row } from "react-bootstrap"

import ProjectCard from "../components/UI/ProjectCard"

import portfolio from '../assets/projectsPictures/portfolio.jpg'
import countryQuiz from '../assets/projectsPictures/countryQuiz.jpg'
import adviceGen from '../assets/projectsPictures/adviceGenerator.jpg'
import timeTrack from '../assets/projectsPictures/timeTrackingBoard.jpg'
import pragma from '../assets/projectsPictures/pragmaToDo.jpg'
import hypnos from '../assets/projectsPictures/hotelApp.jpg'
import diceGame from '../assets/projectsPictures/diceGame.jpg'
import Section from "../components/UI/Section"

const Projects = () =>{

    const myProjects = [
        {id:'p1' , title:'Portfolio', image:portfolio, tech: 'React / HTML / CSS / BS / EmailJS', github: 'https://github.com/Swazeec/portfolio', website: 'https://www.soizicvenel.rocks'},
        {id:'p2' , title:'Quiz App', image:countryQuiz, tech: 'React / HTML / CSS / BS / API', github: 'https://github.com/Swazeec/quizApp', website: 'https://quiz-countries.netlify.app'},
        {id:'p3' , title:'Advice Generator', image:adviceGen, tech: 'React / HTML / CSS / API', github: 'https://github.com/Swazeec/advicegenerator', website: 'https://small-advice-generator.netlify.app'},
        {id:'p4' , title:'Time Tracking App', image:timeTrack, tech: 'React / HTML / CSS', github: 'https://github.com/Swazeec/timeTrackingDashboard', website: 'https://rainbow-valkyrie.netlify.app'},
        {id:'p5' , title:'Pragma ToDo App', image:pragma, tech: 'PHP / POO / MVC / MySQL', github: 'https://github.com/Swazeec/pragma', website: ''},
        {id:'p6' , title:'Hypnos Hotel Group', image:hypnos, tech: 'PHP / MySQL / JS / AJAX / S3', github: 'https://github.com/Swazeec/hypnosHotelGroup', website: ''},
        {id:'p7' , title:'Dice Game', image:diceGame, tech: 'HTML / CSS / BS / JS', github: 'https://github.com/Swazeec/Venel-Soizic-javascript-dice-game', website: 'https://svenel-dice-game.netlify.app'},
    ]

    const content = myProjects.map(item => <ProjectCard key={item.id} title={item.title} image={item.image} tech={item.tech} github={item.tech} website={item.website}/> )

    return <Section title="Projets">
        <Row className="p-0 m-0 mt-5">
            {content}
        </Row>
    </Section>
}

export default Projects