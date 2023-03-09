import ListItem from "../components/UI/ListItem"
import Section from "../components/UI/Section"

const About = () =>{
    return ( <>
        <Section title='Présentation'>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Je suis bien ! In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>
        </Section>
        <Section title='Formations'>
            <ul>
                <ListItem title='Titre professionnel de Développeur web / web mobile' subtitle='Studi, 2022'/>
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
                <ListItem title='Assistante Webmaster – Scandinavia Design' subtitle='e-commerce bilingue – Gennes (49)' dates='de juin 2015 à décembre 2019'/>
                <ListItem title='Coordinatrice de projet de développement local – association FÉPPAL' subtitle='Fédération des Éditeurs et Producteurs phonographiques en Pays de la Loire – Angers (49)' dates='d’octobre 2013 à juin 2014'/>
                <ListItem title='Assistante d’édition – Éditions Henry Lemoine' subtitle='Département musique contemporaine – Paris (75)' dates='de février 2008 à août 2010'/>
            </ul>
        </Section>
    </>)
}

export default About