
// import { useSelector } from "react-redux"

import Navigation from "../Navigation"

// const sessionUser = useSelector(state => state.session.user)
export function HomePage () {

   return (
        <div>
            <Navigation/>
            <h3>Welcome to Home Page</h3>
        </div>

   ) 
}

export function SplashPage () {
    return (
        <div>
            <Navigation/>
            <h3>Welcome to splash page</h3>
        </div>

    )
}
