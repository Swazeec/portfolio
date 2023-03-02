import { Outlet } from "react-router-dom"
import Header from "./Header/Header"

import { Col } from "react-bootstrap"
import HeaderMobile from "./Header/HeaderMobile"
import { useEffect, useState } from "react"

const RootLayout = props => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    useEffect(()=>{
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }
      
        window.addEventListener('resize', handleResize)
    })

    return (
        <>
            <Col xs={12} lg={3} className='p-0'>
                {(screenWidth >= 992) ? <Header/> : <HeaderMobile/>}
            </Col>
            <Col xs={12} lg={9} className='p-5'>
                <main>
                    <Outlet/>
                </main>
            </Col>
        </>
    )
}

export default RootLayout