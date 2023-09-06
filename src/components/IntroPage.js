import React from 'react'
import { User, useAuth0 } from "@auth0/auth0-react";

const IntroPage = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
        <>
            {isAuthenticated && <p> {user.name} </p>}
            {isAuthenticated ? (
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                </button>
            ) : (
                <button onClick={() => loginWithRedirect()}>Log In</button>
            )
            }

        </>
    )
}

export default IntroPage