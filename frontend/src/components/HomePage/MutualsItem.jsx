

export function MutualsItem ({ mutual}) {


    const handleClick = (e) => {
        e.preventDefault();
        // console.log('hi')

    }

    return (
        <div id="mutual-prev-item" onClick={handleClick}>
            <div id="photo-container-mutual-prev">
                <img src=""></img>
            </div>
            <div id="username-container-mutual-prev">
                <h2>{mutual.name}</h2>
            </div>
            <div id="#-events-container">
                <h2>#</h2>
            </div>
            <div id="last-shared-event">
                <h2>event</h2>
            </div>
        </div>
    )
}