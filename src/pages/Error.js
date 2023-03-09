import { useEffect, useState } from "react"
import { Col } from "react-bootstrap"
import Header from "../components/Header/Header"
import HeaderMobile from "../components/Header/HeaderMobile"

const Error = (props) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    useEffect(()=>{
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }
      
        window.addEventListener('resize', handleResize)
    })

    return (
        <>
            <Col xs={12} lg={3} className='p-0'>{(screenWidth >= 992) ? <Header/> : <HeaderMobile/>}</Col>
            <main className='col my-5 py-5 d-flex align-items-center justify-content-center'>
                 <h2>Error: page not found!</h2>
            </main>           
        </>
    )
}

export default Error