import ReactDOM from 'react-dom'
import classes from './ProjectModal.module.css'
import { Card } from 'react-bootstrap'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = props => {

    return (
        <Card className={classes.modal} >
            <Card.Body>
                <div className='d-flex justify-content-between mb-2 mb-lg-3'>
                    <h3><i className="bi bi-code"></i> {props.title} <span style={{fontSize:'12px'}}> ({props.projectDate})</span></h3>
                    <div className={classes.close} onClick={props.onClose}>
                        <i className="bi bi-x-lg"></i>
                    </div>
                </div>
                <div className='d-md-flex align-items-center'>
                    <Card.Img className={classes.modalPict} src={props.image} alt={props.title}/>
                    <div className={classes.modalDesc}>
                        {props.description.map(item => <Card.Text key={props.description.indexOf(item)}>{item}</Card.Text>)}
                        <div className="text-center mt-5">
                            {props.github && <Card.Link className={classes.links} href={props.github} target="blank">Github</Card.Link>}
                            {props.website && <Card.Link className={classes.links} href={props.website} target="blank">Website</Card.Link>}
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

const ProjectModal = props => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} image={props.image} projectDate={props.projectDate} description={props.description} tech={props.tech} github={props.github} website={props.website} onClose={props.onClose} />,
                document.getElementById("overlay-root")
            )}
        </>
    )
}

export default ProjectModal