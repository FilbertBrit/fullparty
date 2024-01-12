import "./Mutuals.css"
import Navigation from "../Navigation"
import { useSelector, useDispatch  } from "react-redux"
import { useEffect, useState } from "react"
import { fetchUsers } from "../../store/user"
import upArrow from "../../images/up-arrow.png"
import downArrow from "../../images/down-arrow.png"
import upDownArrow from "../../images/up-and-down-arrow.png"
import { MutualPageItem } from "./MutualPageItem"

export function Mutuals () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const mutualsObj = useSelector(state => state.users)
    const mutuals = mutualsObj ? Object.values(mutualsObj) : [];
    const [filter, setFilter] = useState('events')
    const [nameFilter, setNameFilter] = useState('down')
    const [eventFilter, setEventFilter] = useState('up')

    switch (filter) {
        case 'events':
            
            break;
        case 'names':
            
            break;
    
    }
    
    
    const handleName = async (e) => {
        e.preventDefault();

        if(filter === 'events'){
            await setFilter('names')
            await setNameFilter('down')
        }else{
            await nameFilter === 'down' ? setNameFilter('up') : setNameFilter('down');
        }
    }
    const handleEvent = async (e) => {
        e.preventDefault();

        if(filter === 'names'){
            await setFilter('events')
            await setEventFilter('up')
        }else{
            await eventFilter === 'up' ? setEventFilter('down') : setEventFilter('up');
        }
    }
    
    useEffect( () => {
        dispatch( fetchUsers());
    }, [dispatch])

    return (
        <>
            <Navigation/>
            <div id="layout-mutuals-page">
                <div id="header-mutuals">
                    <div id="mutuals-header">
                        <h1 id="welcome-header-mutuals">Mutuals</h1>
                        <p id="mutuals-msg">~everyone you've ever parties with~</p>
                    </div>
                    <div id="mutual-filters">
                        <div onClick={handleName}  id="filter-divs-mutuals">
                            <p id="filter-header">NAME</p>
                            {filter === 'names' ? (nameFilter === 'up' ? (<img src={upArrow} id="filter-arrow"/>) : (<img src={downArrow} id="filter-arrow"/>)) : (<img src={upDownArrow} id="filter-arrow"/>)}
                        </div>
                        <div onClick={handleEvent} id="filter-divs-mutuals">
                            <p id="filter-header">SHARED EVENTS</p>
                            {filter === 'events' ? (eventFilter === 'down' ? (<img src={downArrow} id="filter-arrow"/>) : (<img src={upArrow} id="filter-arrow"/>)) : (<img src={upDownArrow} id="filter-arrow"/>)}
                        </div>
                    </div>
                </div>
                <div className="mutuals-list" >
                    {
                        mutuals.map ( (mutual, i) => 
                        <MutualPageItem mutual={mutual} key={i}/>)
                    }
                </div>
            </div>
        </>
    )
}