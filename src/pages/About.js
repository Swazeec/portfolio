import Section from "../components/UI/Section"

const About = () =>{

    const year = new Date()
    const age = year.getFullYear() - 1986

    // mes formations
    const studi = ["Maquetter une application", "Réaliser une interface web statique et adaptable", "Développer une interface utilisateur web dynamique", "Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce", "Créer une base de données", "Développer les composents d'accès aux données", "Développer la partie back-end d'une application web ou web mobile", "Elaborer et mettre en oeuvre des composants dans une application de gestion de contenu ou e-commerce"]
    const education = [
        {id:1, title:'Titre professionnel de Développeur web / web mobile', subtitle:'Studi, 2022', description:studi},
        {id:2, title:'DUT Information et Communication, Métiers du livre', subtitle:'Université Paris X, 2008'},
        {id:3, title:'Licence de Musique et Musicologie', subtitle:'Université Rennes II, 2007'},
    ]


    // mes certifications
    const certifications = [
        {id:1, title:'React: The Complete Guide', subtitle:'Maximilian Schwarzmüller, Academind / Udemy, [en cours]'},
        {id:2, title:'Développement web PHP : POO, MySQL, MVC, CRUD', subtitle:'Matthieu Gaston, H2Prog / Udemy, 2022'},
        {id:3, title:'PHP/MySQL : la formation Ultime', subtitle:'Louis-Nicolas Leuillet, Belivemy / Udemy, 2021'},
        {id:4, title:'Javascript : la formation Ultime', subtitle:'Louis-Nicolas Leuillet, Belivemy / Udemy, 2021'},
    ]

    // mes compétences
    const skills = [
        {id:1, title:'Technologies', subtitle:'HTML / CSS / Bootstrap / Javascript / ReactJS / ReactTS / Ionic / React-pdf / Express / MongoDB / PHP / MySql'},
        {id:2, title:'Outils', subtitle:'Git / GitHub / Visual Studio Code / Figma / Trello / Postman / Wordpress / Xampp'},
        {id:3, title:'Langues', subtitle:'Français / Anglais professionnel'},
        {id:4, title:'Soft skills', subtitle:'Rigueur / Autonomie / Adaptabilité / Persévérance / Travail en équipe / Bienveillance'},
    ]

    // mes expériences
    const xp = [
        {id:4, title:'Développeur front-end React – Nebul’IA', subtitle: 'Agence web – Full-Remote', dates:'d’aoûr 2023 à février 2024', intro:"Tout au long de ce contrat, j’ai été confrontée à de nombreux challenges nécessitant une adaptation : découverte de Ionic et Typescript, de React-pdf avec ses forces et ses limites, initiation à Express et MongoDB... J’ai eu la chance de mener à bien, en autonomie et presque seule, des projets intéressants, ce qui m’a confortée dans mon choix d’être développeur React.",  description:[
            "Élaboration de charte graphique",
            "Maquettage sur Figma", 
            "Utilisation d'API",
            "Développement de sites vitrine avec React", 
            "Développement d’une solution permettant la génération automatique de rapports pdf avec React-pdf et à partir de données sur AirTable",
            "Organisation de données en tables et réalisation de dashboard d'administration sur AirTable (solution de base de données no-code)"
        ]},
        {id:3, title:'Assistante Webmaster – Scandinavia Design', subtitle: 'e-commerce bilingue – Gennes (49)', dates:'de juin 2015 à décembre 2019', intro:"Ma mission était d’améliorer et maintenir à jour le site de vente, en français et en anglais, pour développer sa visibilité en ligne ainsi que les ventes à l’international. Suite à mon arrivée, le CA de l’entreprise a augmenté de plus de 50% en l’espace de quelques mois et l’équipe s’est développée.", description:["Rédaction de contenu original bilingue pour un bon référencement naturel (SEO)", "Amélioration de l’expérience et de l’interface utilisateur (UX/UI)",
        "Mise à jour et optimisation du site et des fiches produit",
        "Gestion de base de données Prestashop, gestion de stock et commandes fournisseurs internationaux",
        "Veille concurrentielle, suivi de l’actualité"]},
        {id:2, title:'Coordinatrice de projet de développement local – association FÉPPAL', subtitle:'Fédération des Éditeurs et Producteurs phonographiques en Pays de la Loire – Angers (49)', dates:'d’octobre 2013 à juin 2014', description:['mise à jour des supports de communication', 'démarchage de partenaires potentiels', "intégration de contenu (Wordpress et plateforme de streaming)", "gestion administrative (adhésions, réunions, animation de réseau, etc.)"]},
        {id:1, title:'Assistante d’édition – Éditions Henry Lemoine', subtitle: 'Département musique contemporaine – Paris (75)', dates: 'de février 2008 à août 2010', description:['gestion de stocks, commandes fournisseur, suivi livraisons et facturations', 'saisie et mise en forme de documents divers', 'élaboration d’un support print pour la promotion de l’éditeur (catalogue produit)', 'numérisation et préparation de documents d’archive pour impression' ]}
    ]

    // mes centres d'intérêt
    const interests = [
        {id:1, title:'Musique', subtitle:'Depuis mon plus jeune âge, la musique a fait partie de ma vie. J\'ai fait le conservatoire, joué dans différents orchestres et groupes. Une véritable passion qui m\'a conduite à un cursus musicologique à l\'université. Je n\'imagine pas passer une seule journée sans musique, que ce soit écouter du rock (les Foo Fighters et Frank Turner étant pour moi des incontournables) ou de la musique plus "classique", ma préférence dans ce cas allant pour la musique ancienne (médiévale, renaissante et baroque).'},
        {id:2, title:'Loisirs créatifs', subtitle:'Heureuse maman de 3 enfants, j\'ai eu la chance de rester assez longtemps avec eux à la maison pour leur faire découvrir une multitude d\'activités : dessin, coloriage, peinture, origami, couture, fabrications diverses (mobiles, stickers, licornes...), etc. que ce soit avec du matériel acheté, détourné, trouvé dans la nature, ou recyclé ! J\'adore découvrir de nouvelles possibilités de créations et les partager en famille.'},
        {id:3, title:'Écologie, solidarité', subtitle:'La préservation de notre environnement ainsi que la solidarité entre les personnes sont des choses qui me tiennent à coeur. Dans cette idée, j\'ai rejoint en 2020 le bureau d\'une association solidaire - La Bicoque de Chevaigné. Cette association propose - entre autres choses - un espace de gratuité où tout le monde peut déposer et prendre ce que bon lui semble. Solidarité, et seconde vie pour les objets. Dans le but de rapprocher les habitants, nous organisons des événements de partage : goûters musicaux, ateliers couture et réparations, petits spectacles, etc. D\'ailleurs, pour revenir à l\'écologie, je suis très intéressée par l\'éco-conception de site web. Un sujet que j\'aimerais approfondir dans les prochains mois. (On ne finit jamais d\'apprendre !)'},
    ]
    
    return ( <>
        <Section title='Présentation'>
            <p>Je m'appelle Soizic, j'ai {age} ans, et je suis maman de 3 enfants. Passionnée depuis toujours par le web, j'ai décidé de me reconvertir dans le développement web en suivant une formation diplômante en 2021 et 2022. Une belle aventure après avoir travaillé, notamment, dans l'édition et en tant que webmaster sur un site de e-commerce.</p>
            <p>Entre août 2023 et février 2024, chez Nebul’IA, j’ai été confrontée à de nombreux challenges nécessitant une adaptation : découverte de Ionic et Typescript, de React-pdf avec ses forces et ses limites, initiation à Express et MongoDB... J’ai eu la chance de mener à bien, en autonomie et presque seule, des projets intéressants, ce qui m’a confortée dans mon choix d’être développeur React.</p>
            <p>Polyvalente, curieuse et capable de m'adapter rapidement au sein d'une équipe pour mener à bien mes missions, je recherche actuellement à m'investir dans une nouvelle entreprise, en région rennaise ou pour un poste en télétravail. Vous trouverez ci-dessous des informations sur mon parcours, mes différentes certifications qui complètent mes formations, etc. N'hésitez pas à me contacter pour toute information complémentaire et afin d’échanger de vive voix.!</p>
        </Section>
        <Section title='Expériences' list={xp} />
        <Section title='Compétences' list={skills} />
        <Section title='Formations' list={education} />
        <Section title='Certifications' list={certifications} />
        <Section title='Intérêts' list={interests} />
    </>)
}

export default About