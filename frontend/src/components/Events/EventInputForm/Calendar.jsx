import "./Calendar.css"

export function Calendar () {

    return (
        <>
            <div className="calendar-container">
                <div className="calendar-header">
                    <div className="calendar-header-item">
                        START
                    </div>
                    <div className="calendar-header-item">
                        X END
                    </div>
                </div>
                <div className="calendar-input-container">
                    <div className="calendar-date-input">

                    </div>
                    <div className="calendar-time-input">

                    </div>
                </div>
            </div>
        </>
    )
}