import { Row } from "react-bootstrap"

import ProjectCard from "../components/Projects/ProjectCard"

import nebulia from '../assets/projectsPictures/nebulia.jpg'
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
        {
            id:'p8' , 
            title:'Nebul\'IA', 
            projectDate:'2023',
            image:nebulia, 
            tech: 'Ionic / ReactTS', 
            github: '', 
            website: 'https://www.nebulia.tech', 
            description:[
                'Réalisation d\'un site vitrine pour l\'entreprise dans laquelle je travaillais.', 
                'Élaboration de la charte graphique et maquettage sur Figma.',
                'Utilisation de Ionic avec React Typescript, gestion Dark/Light mode, effet parallax géré en CSS : le logo passe derrière les montagnes au scroll.', 
            ]
        },
        {
            id:'p1' , 
            title:'Portfolio', 
            projectDate:'2023',
            image:portfolio, 
            tech: 'ReactJS / CSS / Bootstrap', 
            github: 'https://github.com/Swazeec/portfolio', 
            website: 'https://www.soizicvenel.rocks', 
            description:[
                'Réalisation d\'un portfolio responsive pour la mise en pratique de React 18 avec React Router 6. Mise en place d\'un formulaire de contact géré avec EmailJS.', 
                'Utilisation de React, React Router 6, useState, useRef, useEffect, custom hooks, Portal, EmailJS, Bootstrap', 
                'Déploiement : Netlify'
            ]
        },
        {
            id:'p2' , 
            title:'Quiz App', 
            projectDate:'2023',
            image:countryQuiz, 
            tech: 'React / CSS / Bootstrap / API', 
            github: 'https://github.com/Swazeec/quizApp', 
            website: 'https://quiz-countries.netlify.app', 
            description:[
                "Récupère les données d’une API pour tester ses connaissances, aléatoirement, sur les drapeaux et capitales des pays du monde entier. Tant que l’utilisateur trouve la bonne réponse, le jeu continue.", 
                "Utilisation de React, useEffect, useReducer, useState, fetch, API RESTful.",   
                "Déploiement : Netlify.",
                "API : restcountries.com",
                "Source : devchallenges.io", 
            ]
        },
        {
            id:'p3' , 
            title:'Advice Generator', 
            projectDate:'2023',
            image:adviceGen, 
            tech: 'React / CSS / API', 
            github: 'https://github.com/Swazeec/advicegenerator', 
            website: 'https://small-advice-generator.netlify.app', 
            description:[
                "Réalisation d'une page simple avec React, permettant l'affichage aléatoire d'un conseil via une API.",
                "Utilisation de React, useEffect, useState, fetch, API JSON.",
                "Déploiement : Netlify.",
                "API : https://api.adviceslip.com",
                "Source : www.frontendmentor.io",
            ]
        },
        {
            id:'p4' , 
            title:'Time Tracker', 
            projectDate:'2023',
            image:timeTrack, 
            tech: 'React / CSS', 
            github: 'https://github.com/Swazeec/timeTrackingDashboard', 
            website: 'https://rainbow-valkyrie.netlify.app', 
            description:[
                "Réalisation d'un board de suivi d'activité avec filtre par jour / semaine / mois. Données provenant d'un fichier Json dans l'application",
                "Déploiement : Netlify.",
                "Fichier Json pour les activités",
                "Source : www.frontendmentor.io",
            ]
        },
        {
            id:'p5' , 
            title:'ToDo App', 
            projectDate:'2022',
            image:pragma, 
            tech: 'PHP / POO / MVC / MySQL', 
            github: 'https://github.com/Swazeec/pragma', 
            website: '', 
            description:[
                "Application responsive avec authentification utilisateur, permettant d'accéder, pour le moment, à une fonctionnalité de ToDO List. J'ai réalisé ce projet personnel pour mettre en pratique mes connaissances en maquettage ainsi que ce que j'ai appris lors de ma formation 'Développement web PHP : POO, MySQL, MVC, CRUD'. Dans la ToDO List, possibilité de voir / ajouter / modifier / supprimer des taches, et de filtrer par état d'avancement.",
                "Maquettage : Figma.",
                "Architecture : MVC.",
                "Front : HTML, CSS, Bootstrap, JS.",
                "Back : PHP/POO, MySql. Dialogue BDD / back : PDO.",

            ]
        },
        {
            id:'p6' , 
            title:'Hypnos Hotel Group', 
            projectDate:'2022',
            image:hypnos, 
            tech: 'PHP / MySQL / JS / HTML / CSS', 
            github: 'https://github.com/Swazeec/hypnosHotelGroup', 
            website: '', 
            description:[
                "Projet réalisé pour le passage du titre professionnel de Développeur Web et Web Mobile.",
                "Hypnos est un groupe hôtelier de luxe (fictif) souhaitant gérer en interne les services de présentation et de réservation de chambre. C'est pourquoi nous avons lancé le projet Hypnos Hotel Group avec la réalisation d'une application web et web mobile. Grâce à ce site, tout le monde peut découvrir l'ensemble de l'offre Hypnos et vérifier les disponibilités de chaque chambre. La réservation étant destinée aux clients connectés, les visiteurs ont la possibilité de s'incrire et se connecter. Concernant la gestion : un espace professionnel est réservé à l'administrateur (qui gère ce qui est relatif aux hôtels) et aux managers (qui gèrent chacun leur hôtel et les suites associées.)", 
                "Maquettage : diagrammes, wireframes, maquettes.",
                "Front : HTML, CSS, Bootstrap, JS, Ajax.",
                "Tests : Mocha.",
                "Back : PHP procédural. BDD : MySql, gérée via JawsDB sur Heroku. Dialogue BDD / back : PDO.", 
                "Déploiement : Heroku. Bucket S3.",
                "Source : Projet d'école, Studi"
            ]
        },
        {
            id:'p7' , 
            title:'Dice Game', 
            projectDate:'2021',
            image:diceGame, 
            tech: 'HTML / CSS / Bootstrap / JS', 
            github: 'https://github.com/Swazeec/Venel-Soizic-javascript-dice-game', 
            website: 'https://svenel-dice-game.netlify.app', 
            description:[
                "Projet réalisé au tout début de ma reconversion professionnelle, pour mettre en pratique mes connaissances en javascript.",
                "Jeu de dé. Le but du jeu est simple : arriver à 100 points avant son adversaire ! Le dé peut être lancé autant de fois que souhaité par le joueur actif. Tant que le résultat est différent de 1, le joueur cumule des points dans un score temporaire. Il peut ajouter son score temporaire à son score global à tout moment, et ainsi laisser jouer son adversaire. S'il fait 1, il perd son score temporaire et c'est au joueur suivant de tenter sa chance.",
                "Utilisation de HTML, CSS, Bootstrap, Javascript vanilla",
                "Déploiement : Netlify.",
                "Source : Projet d'école, Studi."
            ]
        },
    ]

    const content = myProjects.map(item => <ProjectCard key={item.id} id={item.id} title={item.title} projectDate={item.projectDate} image={item.image} tech={item.tech} github={item.github} website={item.website} description={item.description}/> )

    return <Section title="Projets">
        <Row className="p-0 m-0 mt-5">
            {content}
        </Row>
    </Section>
}

export default Projects