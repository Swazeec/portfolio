import { useState } from "react"

const useShowDetails = () => {
    const [showDescription, setShowDescription] = useState(false)
    const onClickHandler = ()=> {
        showDescription ? setShowDescription(false) : setShowDescription(true)
    }

    let details = showDescription ? <><i className="bi bi-dash-circle"></i> Réduire</>: <><i className="bi bi-plus-circle"></i> En savoir plus</>

    return {
        onClickHandler: onClickHandler,
        showDescription: showDescription,
        details: details
    }
}

export default useShowDetails