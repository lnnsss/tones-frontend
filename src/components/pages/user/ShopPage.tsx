import React from "react"
import { Helmet } from "react-helmet"
import Shop from "../../Shop";

const ShopPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Магазин</title>
            </Helmet>
            <Shop />
        </>
    )
}
export default ShopPage