import "./Mutuals.css"
import Navigation from "../Navigation"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchUsers } from "../../store/user"

export function Mutuals () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    
    
    useEffect( () => {
        dispatch( fetchUsers());
    }, [dispatch])

    return (
        <div>
            <Navigation/>
            <div>
                <div id="mutuals-header">
                    <h1 id="welcome-header-mutuals">Mutuals</h1>
                    <p id="mutuals-msg">~everyone you've ever parties with~</p>
                </div>
                <div id="mutual-filters">
                    <p>NAME</p>
                    <p>SHARED EVENTS</p>
                </div>

            </div>
            <div className="top-six-mutuals" >
                <h3>Mutual 1</h3>
                <h3>Mutual 2</h3>
                <h3>Mutual 3</h3>
            </div>
                
        </div>
    )
}