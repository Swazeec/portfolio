import ListItem from "../components/About/ListItem"
import Section from "../components/UI/Section"



const About = () =>{

    const year = new Date()
    const age = year.getFullYear() - 1986

    // mes formations
    const studi = ["Maquetter une application", "Réaliser une interface web statique et adaptable", "Développer une interface utilisateur web dynamique", "Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce", "Créer une base de données", "Développer les composents d'accès aux données", "Développer la partie back-end d'une application web ou web mobile", "Elaborer et mettre en oeuvre des composants dans une application de gestion de contenu ou e-commerce"]
    const education = [
        {id:1, title:'Titre professionnel de Développeur web / web mobile', subtitle:'Studi, 2022', description:{studi}},
        {id:2, title:'DUT Information et Communication, Métiers du livre', subtitle:'Université Paris X, 2008'},
        {id:3, title:'Licence de Musique et Musicologie', subtitle:'Université Rennes II, 2007'},
    ]
    
    const educationContent = education.map(item => <ListItem key={item.id} title={item.title} subtitle={item.subtitle} description={item.description} />)


    // mes certifications
    const certifications = [
        {id:1, title:'React: The Complete Guide', subtitle:'Maximilian Schwarzmüller, Academind / Udemy, [en cours]'},
        {id:2, title:'Développement web PHP : POO, MySQL, MVC, CRUD', subtitle:'Matthieu Gaston, H2Prog / Udemy, 2022'},
        {id:3, title:'PHP/MySQL : la formation Ultime', subtitle:'Louis-Nicolas Leuillet, Belivemy / Udemy, 2021'},
        {id:4, title:'Javascript : la formation Ultime', subtitle:'Louis-Nicolas Leuillet, Belivemy / Udemy, 2021'},
    ]

    const certificationsContent = certifications.map(item =><ListItem key={item.id} title={item.title} subtitle={item.subtitle} />)


    // mes compétences
    const skills = [
        {id:1, title:'Technologies', subtitle:'HTML / CSS / Bootstrap / JS / ReactJS / MochaJS / PHP / MySql'},
        {id:2, title:'Logiciels et services', subtitle:'Git / GitHub / Xampp / DBeaver / Heroku / AWS  / Visual Studio Code / Wordpress / Trello / Figma / Suite Adobe'},
        {id:3, title:'Langues', subtitle:'Français / Anglais professionnel'},
        {id:4, title:'Soft skills', subtitle:'Rigueur / Persévérence / Travail en équipe / Sens du service / Polyvalence / Bienveillance'},
    ]

    const skillsContent = skills.map(item =><ListItem key={item.id} title={item.title} subtitle={item.subtitle} />)

    // mes expériences
    const xp = [
        {id:1, title:'Assistante Webmaster – Scandinavia Design', subtitle: 'e-commerce bilingue – Gennes (49)', dates:'de juin 2015 à décembre 2019', description:["Rédaction de contenu original bilingue pour un bon référencement naturel (SEO)", "Amélioration de l’expérience et de l’interface utilisateur (UX/UI)",
        "Mise à jour et optimisation du site et des fiches produit",
        "Gestion de base de données Prestashop, gestion de stock et commandes fournisseurs internationaux",
        "Veille concurrentielle, suivi de l’actualité"]},
        {id:2, title:'Coordinatrice de projet de développement local – association FÉPPAL', subtitle:'Fédération des Éditeurs et Producteurs phonographiques en Pays de la Loire – Angers (49)', dates:'d’octobre 2013 à juin 2014', description:['mise à jour des supports de communication', 'démarchage de partenaires potentiels', "intégration de contenu (Wordpress et plateforme de streaming)", "gestion administrative (adhésions, réunions, animation de réseau, etc.)"]},
        {id:3, title:'Assistante d’édition – Éditions Henry Lemoine', subtitle: 'Département musique contemporaine – Paris (75)', dates: 'de février 2008 à août 2010', description:['gestion de stocks, commandes fournisseur, suivi livraisons et facturations', 'saisie et mise en forme de documents divers', 'élaboration d’un support print pour la promotion de l’éditeur (catalogue produit)', 'numérisation et préparation de documents d’archive pour impression' ]}
    ]

    const xpContent = xp.map(item => <ListItem key={item.id} title={item.title} subtitle={item.subtitle} dates={item.dates} description={item.description} />)

    // mes centres d'intérêt
    const interests = [
        {id:1, title:'Musique', subtitle:'Depuis mon plus jeune âge, la musique a fait partie de ma vie. J\'ai fait le conservatoire, joué dans différents orchestres et groupes. Une véritable passion qui m\'a conduite à un cursus musicologique à l\'université. Je n\'imagine pas passer une seule journée sans musique, que ce soit écouter du rock (les Foo Fighters et Frank Turner étant pour moi des incontournables) ou de la musique plus "classique", ma préférence dans ce cas allant pour la musique ancienne (médiévale, renaissante et baroque).'},
        {id:2, title:'Loisirs créatifs', subtitle:'Heureuse maman de 3 enfants, j\'ai eu la chance de rester assez longtemps avec eux à la maison pour leur faire découvrir une multitude d\'activités : dessin, coloriage, peinture, origami, couture, fabrications diverses (mobiles, stickers, licornes...), etc. que ce soit avec du matériel acheté, détourné, trouvé dans la nature, ou recyclé ! J\'adore découvrir de nouvelles possibilités de créations et les partager en famille.'},
        {id:3, title:'Écologie, solidarité', subtitle:'La préservation de notre environnement ainsi que la solidarité entre les personnes sont des choses qui me tiennent à coeur. Dans cette idée, j\'ai rejoint en 2020 le bureau d\'une association solidaire - La Bicoque de Chevaigné. Cette association propose - entre autres choses - un espace de gratuité où tout le monde peut déposer et prendre ce que bon lui semble. Solidarité, et seconde vie pour les objets. Dans le but de rapprocher les habitants, nous organisons des événements de partage : goûters musicaux, ateliers couture et réparations, petits spectacles, etc. D\'ailleurs, pour revenir à l\'écologie, je suis très intéressée par l\'éco-conception de site web. Un sujet que j\'aimerais approfondir dans les prochains mois. (On ne finit jamais d\'apprendre !)'},
    ]
    const interestsContent = interests.map(item => <ListItem key={item.id} title={item.title} subtitle={item.subtitle} />)

    
    return ( <>
        <Section title='Présentation'>
            <p>Je m'appelle Soizic, j'ai {age} ans, et je suis maman de 3 enfants. Passionnée depuis toujours par le web, j'ai décidé de me reconvertir dans le développement web en suivant une formation diplômante en 2021 et 2022. Une belle aventure après avoir travaillé, notamment, dans l'édition et en tant que webmaster pour une entreprise de e-commerce. Cette formation a été un succès personnel, et je suis fière d'avoir obtenu mon titre professionnel de Développeur Web et Web Mobile fin 2022.</p>
            <p>Polyvalente, curieuse et capable de m'adapter rapidement au sein d'une équipe pour mener à bien mes missions, je suis actuellement à la recherche d'une entreprise, idéalement dans le secteur de Rennes, qui saura me donner une chance de débuter dans ce métier et ainsi gagner en expérience et compétences. Je cherche donc un poste de développeur web, plutôt orienté front-end ou full-stack, et suis à l'écoute des opportunités professionnelles qui s'offriront à moi.</p>
            <p>Tout en cherchant mon nouveau challenge professionnel, je continue à me former : je suis actuellement la formation en anglais "React - The Complete Guide (incl Hooks, React Router, Redux)" de Maximilian Schwarzmüller (Academind / Udemy) tout en mettant en pratique ce que j'apprends. Un beau programme !</p>
            <p>Vous trouverez ci-dessous des informations sur mon parcours, mes différentes certifications qui complètent mes formations, etc. N'hésitez pas à me contacter (tel/mail) pour toute information complémentaire et afin d’échanger de vive voix.</p>
        </Section>
        <Section title='Formations'>
            <ul>
                {educationContent}
            </ul>
        </Section>
        <Section title='Certifications'>
            <ul>
                {certificationsContent}
            </ul>
        </Section>
        <Section title='Compétences'>
            <ul>
                {skillsContent}
            </ul>
        </Section>
        <Section title='Expériences'>
            <ul>
                {xpContent}
            </ul>
        </Section>
        <Section title='Intérêts'>
            <ul>
                {interestsContent}
            </ul>
        </Section>
    </>)
}

export default About