import "./SharedEventPrev.css"
import wazzap from "../../images/wazzap-halloween.jpeg"

export const SharedEventPrev = ({ event }) => {
    const showPage = '/events/' + event.id;
    const date = new Date(event.dateTime)
    const today = new Date()
    let eventDate = ''

    if((date.getDay() === today.getDay()) && (date.getMonth() === today.getMonth()) && (date.getFullYear() === today.getFullYear())){
        if(today.getHours() - date.getHours() === 0){
            eventDate = (today.getMinutes() - date.getMinutes() > 1) ? ((today.getMinutes() - date.getMinutes()) + ' minutes ago') : ('about 1 minute ago')
        }else{
            eventDate = (today.getHours() - date.getHours()) > 1 ? ('about ' + (today.getHours() - date.getHours()) + ' hours ago') : ( 'about 1 hour ago' )
        }
    }else if((date.getMonth() === today.getMonth()) && (date.getFullYear() === today.getFullYear())){
        eventDate = (date.getDay() - today.getDay() > 1) ? ((date.getDay() - today.getDay() ) + ' days ago') : ( '1 day ago' )  
    }else if(date.getFullYear() === today.getFullYear() || (today.getMonth() - date.getMonth() < 0)){
        eventDate = ((today.getMonth() - date.getMonth() + 12) > 1) ? (today.getMonth() - date.getMonth() + 12) + ' months ago' : '1 month ago';
    }else{
        eventDate = (date.getFullYear() - today.getFullYear() > 1) ? (date.getFullYear() - today.getFullYear()) + 'years ago' : '1 year ago';
    }

    return (
        <a href={ showPage } id="shared-event-item" target='_blank' rel="noreferrer">
            <img src={wazzap} id="shared-event-img" alt="dummy-pic"/>
            <div className="details">
                <h2 id="shared-event-item-title">{event.title}</h2>
                <h2 id="shared-event-item-date">{eventDate}</h2>
            </div>
        </a>
    )
}