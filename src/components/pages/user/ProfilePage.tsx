import React from 'react';
import {Helmet} from "react-helmet";
import Profile from "../../Profile";

const ProfilePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Профиль</title>
            </Helmet>
            <Profile />
        </>
    )
}

export default ProfilePage;