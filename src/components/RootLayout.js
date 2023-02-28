import { Outlet } from "react-router-dom"
import Header from "./Header/Header"

import { Col } from "react-bootstrap"

const RootLayout = props => {
    return (
        <>
            <Col xs={12} lg={3} className='p-0'>
                <Header/>
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