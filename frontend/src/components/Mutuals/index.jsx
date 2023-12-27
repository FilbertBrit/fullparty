import "./Mutuals.css"
import Navigation from "../Navigation"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchUsers } from "../../store/user"

export function Mutuals () {
    const sessionUser = useSelector(state => state.session.user)

    const dispatch = useDispatch();
    
    useEffect( () => {
        dispatch( fetchUsers());
    }, [dispatch])

    return (
        <div>
            <Navigation/>
            <div className="top-six-mutuals" >
                <h3>Mutual 1</h3>
                <h3>Mutual 2</h3>
                <h3>Mutual 3</h3>
            </div>
                
        </div>
    )
}