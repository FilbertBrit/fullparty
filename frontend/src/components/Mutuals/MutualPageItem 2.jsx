
export function MutualPageItem ({ mutual }) {

    // const recentEvent = mutual.recentEvent
    const date = new Date(mutual.recentEvent)
    const today = new Date()
    let recentEventDate = '';

    if((date.getDay() === today.getDay()) && (date.getMonth() === today.getMonth()) && (date.getFullYear() === today.getFullYear())){
        if(today.getHours() - date.getHours() === 0){
            recentEventDate = (today.getMinutes() - date.getMinutes() > 1) ? ((today.getMinutes() - date.getMinutes()) + ' minutes ago') : ('about 1 minute ago')
        }else{
            recentEventDate = (today.getHours() - date.getHours()) > 1 ? ('about ' + (today.getHours() - date.getHours()) + ' hours ago') : ( 'about 1 hour ago' )
        }
    }else if((date.getMonth() === today.getMonth()) && (date.getFullYear() === today.getFullYear())){
        recentEventDate = (date.getDay() - today.getDay() > 1) ? ((date.getDay() - today.getDay() ) + ' days ago') : ( '1 day ago' )  
    }else if(date.getFullYear() === today.getFullYear()){
        recentEventDate = (date.getMonth() - today.getMonth() > 1) ? (date.getMonth() - today.getMonth()) + 'months ago' : '1 month ago';
    }else{
        recentEventDate = (date.getFullYear() - today.getFullYear() > 1) ? (date.getFullYear() - today.getFullYear()) + 'years ago' : '1 year ago';
    }


    return (
        <div className="mutual-page-item">
            <div className="profile-container-mutuals-page">
                <div className="user-profile-photo" >
                      <div className="initials">
                        {mutual.name.slice(0,1)}
                      </div>
                </div>
                <div className="mutual-item-info">
                    <h2>{mutual.name}</h2>
                    <h2 className='mutual-date' id="mutual-page-info">{recentEventDate}</h2>
                </div>
            </div>
            <div className="mutuals-num-event-container">
                <h2 id="mutual-page-info">{mutual.sharedEvents}</h2>
            </div>
        </div>
    )
}