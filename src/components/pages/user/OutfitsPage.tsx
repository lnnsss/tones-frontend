import React from "react"
import { Helmet } from "react-helmet"
import Outfits from "../../Outfits";

const OutfitsPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Аутфиты</title>
            </Helmet>
            <Outfits />
        </>
    )
}
export default OutfitsPage