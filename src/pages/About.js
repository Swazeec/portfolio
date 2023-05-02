import ListItem from "../components/About/ListItem"
import Section from "../components/UI/Section"



const About = () =>{

    const xp = [
        {id:1, title:'Assistante Webmaster – Scandinavia Design', subtitle: 'e-commerce bilingue – Gennes (49)', dates:'de juin 2015 à décembre 2019', description:["Rédaction de contenu original bilingue pour un bon référencement naturel (SEO)", "Amélioration de l’expérience et de l’interface utilisateur (UX/UI)",
        "Mise à jour et optimisation du site et des fiches produit",
        "Gestion de base de données Prestashop, gestion de stock et commandes fournisseurs internationaux",
        "Veille concurrentielle, suivi de l’actualité"]},
        {id:2, title:'Coordinatrice de projet de développement local – association FÉPPAL', subtitle:'Fédération des Éditeurs et Producteurs phonographiques en Pays de la Loire – Angers (49)', dates:'d’octobre 2013 à juin 2014', description:['mise à jour des supports de communication', 'démarchage de partenaires potentiels', "intégration de contenu (Wordpress et plateforme de streaming)", "gestion administrative (adhésions, réunions, animation de réseau, etc.)"]},
        {id:3, title:'Assistante d’édition – Éditions Henry Lemoine', subtitle: 'Département musique contemporaine – Paris (75)', dates: 'de février 2008 à août 2010', description:['gestion de stocks, commandes fournisseur, suivi livraisons et facturations', 'saisie et mise en forme de documents divers', 'élaboration d’un support print pour la promotion de l’éditeur (catalogue produit)', 'numérisation et préparation de documents d’archive pour impression' ]}
    ]

    const studi = ["Maquetter une application", "Réaliser une interface web statique et adaptable", "Développer une interface utilisateur web dynamique", "Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce", "Créer une base de données", "Développer les composents d'accès aux données", "Développer la partie back-end d'une application web ou web mobile", "Elaborer et mettre en oeuvre des composants dans une application de gestion de contenu ou e-commerce"]

    const xpContent = xp.map(item => <ListItem key={item.id} title={item.title} subtitle={item.subtitle} dates={item.dates} description={item.description} />)
    const year = new Date()
    const age = year.getFullYear() - 1986

    return ( <>
        <Section title='Présentation'>
            <p>Je m'appelle Soizic, j'ai {age} ans, et je suis maman de 3 enfants. Passionnée depuis toujours par le web, j'ai décidé de me reconvertir dans le développement web en suivant une formation diplômante en 2021 et 2022, après avoir travaillé, notamment, dans l'édition et en tant que webmaster pour une entreprise de e-commerce.</p>
            <p>Polyvalente, curieuse et capable de m'adapter rapidement au sein d'une équipe pour mener à bien mes missions, je suis actuellement à la recherche d'une entreprise, idéalement dans le secteur de Rennes, qui saura me donner une chance de débuter dans ce métier et ainsi gagner en expérience et compétences. Je cherche donc un poste de développeur web, plutôt orienté front-end ou full-stack, et suis à l'écoute des opportunités professionnelles qui s'offriront à moi.</p>
            <p>Tout en cherchant mon nouveau challenge professionnel, je continue à me former : je suis actuellement la formation en anglais "React - The Complete Guide (incl Hooks, React Router, Redux)" de Maximilian Schwarzmüller (Academind / Udemy). Un beau programme !</p>
            <p>Vous trouverez ci-dessous des informations sur mon parcours, mes différentes certifications qui complètent mes formations, etc. N'hésitez pas à me contacter (tel/mail) pour toute information complémentaire et afin d’échanger de vive voix.</p>
        </Section>
        <Section title='Formations'>
            <ul>
                <ListItem title='Titre professionnel de Développeur web / web mobile' subtitle='Studi, 2022' description={studi}/>
                <ListItem title='DUT Information et Communication, Métiers du livre' subtitle='Université Paris X, 2008'/>
                <ListItem title='Licence de Musique et Musicologie' subtitle='Université Rennes II, 2007'/>
            </ul>
        </Section>
        <Section title='Certifications'>
            <ul>
                <ListItem title='React: The Complete Guide' subtitle='Maximilian Schwarzmüller, Academind / Udemy, [en cours]'/>
                <ListItem title='Développement web PHP : POO, MySQL, MVC, CRUD' subtitle='Matthieu Gaston, H2Prog / Udemy, 2022'/>
                <ListItem title='PHP/MySQL : la formation Ultime' subtitle='Louis-Nicolas Leuillet, Belivemy / Udemy, 2021'/>
                <ListItem title='Javascript : la formation Ultime' subtitle='Louis-Nicolas Leuillet, Belivemy / Udemy, 2021'/>
            </ul>
        </Section>
        <Section title='Expériences'>
            <ul>
                {xpContent}
            </ul>
        </Section>
    </>)
}

export default About