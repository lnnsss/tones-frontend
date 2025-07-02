import React from "react"
import { Helmet } from "react-helmet"
import Wardrobe from "../../Wardrobe";

const WardrobePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Гардероб</title>
            </Helmet>
            <Wardrobe />
        </>
    )
}
export default WardrobePage