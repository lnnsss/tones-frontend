import React from "react"
import { Helmet } from "react-helmet"
import About from "../../About";

const AboutPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>О нас</title>
            </Helmet>
            <About />
        </>
    )
}
export default AboutPage