import { useState } from "react"

export const MutualInvitee = ({ mutual }) => {

    const [clicked, setClicked] = useState(false);
    console.log(mutual, clicked)


    return (
        <div className="MutualInvitee" onClick={ () => clicked === false ? setClicked(true) : setClicked(false)}>
            <div id="invitee-user-photo">
                <div className="initials" id='initial-mutual-invitee'>
                    {mutual.name.slice(0,1)}
                </div>
            </div>
            <div id="invitee-info">
                <h2 id='invitee-name'>{mutual.name}</h2>
                <p id='invitee-event'>🕔 {mutual.recentEvent}</p>
            </div>
            <div id="invitee-checkbox">
                {clicked ? '✓' : null}
            </div>
        </div>
    )
}