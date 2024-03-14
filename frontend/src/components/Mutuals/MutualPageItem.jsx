
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modal";
import { useState } from "react";


export function MutualPageItem ({ mutual }) {

    // const recentEvent = mutual.recentEvent
    const dispatch = useDispatch();
    const date = new Date(mutual.recentEvent)
    const today = new Date()
    const [hovered, setHovered] = useState(false);
    console.log(hovered)
    
    const time = Math.floor((Math.abs(new Date(today.toDateString()) - new Date (date.toDateString()))/(1000*60*60*24)));
    let recentEventDate = '';

    if((date.getDate() === today.getDate()) && (date.getMonth() === today.getMonth()) && (date.getFullYear() === today.getFullYear())){
        if(today.getHours() - date.getHours() === 0){
            recentEventDate = (today.getMinutes() - date.getMinutes() > 1) ? ((today.getMinutes() - date.getMinutes()) + ' minutes ago') : ('about 1 minute ago')
        }else{
            recentEventDate = (today.getHours() - date.getHours()) > 1 ? ('about ' + (today.getHours() - date.getHours()) + ' hours ago') : ( 'about 1 hour ago' )
        }
    }else if((date.getMonth() === today.getMonth()) && (date.getFullYear() === today.getFullYear())){
        recentEventDate = (today.getDate() - date.getDate() > 1) ? ((today.getDate() - date.getDate()) + ' days ago') : ( '1 day ago' )  
    }else if(date.getFullYear() === today.getFullYear()){
        recentEventDate = (today.getMonth() - date.getMonth() > 1) ? (today.getMonth() - date.getMonth()) + ' months ago' : '1 month ago';
    }else{
        recentEventDate = (today.getFullYear() - date.getFullYear() > 1) ? (today.getFullYear() - date.getFullYear()) + ' years ago' : '1 year ago';
    }

    // switch (time) {
    //     case time / new Date(today.getFullYear(), today.getMonth()+1, 0).getDate() === 0:
            
    //         break;
    //     case time / 365 === 0:
    //         // recentEventDate = (time > 1) ? time / new Date(today.getFullYear(), today.getMonth()+1, 0).getDate()  + 'months ago' : '1 month ago';
    //         break;
    //     default:
    //         // recentEventDate = (time > 1) ? time / 365  + 'years ago' : '1 year ago';
    //         break;
    // }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(openModal({command: 'mutual-modal',prop: mutual.id}));
    }

    return (
        <div className="mutual-page-item" onClick={handleClick} onMouseOver={ () => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className="profile-container-mutuals-page">
                <div className="user-profile-photo" id="initial-container-mutual" >
                      <div className="initials" id="initials-mutual-page">
                        {mutual.name.slice(0,1)}
                      </div>
                </div>
                <div className="mutual-item-info">
                    <h2>{mutual.name}</h2>
                    <h2 className='mutual-date' id="mutual-page-info">{recentEventDate}</h2>
                </div>
            </div>
            <div className="mutuals-num-event-container">
                <h2 id="mutual-page-info">{mutual.sharedEvents.length}</h2>
                <div id={`hovered-arrow${hovered ? '-hovered' : ''}`}> {"＞"}</div>
            </div>
        </div>
    )
}