import { useEffect } from "react";
import { useState } from "react"

export const MutualInvitee = ({ mutual, invites, setInvites }) => {

    const [clicked, setClicked] = useState(invites[mutual.id] ? true : false);
    const [clickedStyle, setClickedStyle] = useState(invites[mutual.id] ? 'invitee-checkbox-checked' : 'invitee-checkbox-unchecked' );

    const handleClick = () => {
        if(clicked === false){
            // invites[mutual.id] = mutual.name
            const updatedInvites = {
                ...invites,
                [mutual.id]: mutual.name
              };
            setInvites(updatedInvites)
            setClicked(true);
        }else{
            // delete invites[mutual.id]
            const { [mutual.id]: value, ...remainingInvites } = invites;
            setInvites(remainingInvites)
            setClicked(false);
        }
    }
    useEffect( () => {
        invites[mutual.id] ? setClickedStyle('invitee-checkbox-checked') : setClickedStyle('invitee-checkbox-unchecked')

    }, [invites, mutual])

    return (
        <div className="MutualInvitee" onClick={ () => handleClick()}>
            <div id="invitee-user-photo">
                <div className="initials" id='initial-mutual-invitee-conatiner'>
                    {mutual.name.slice(0,1)}
                </div>
            </div>
            <div id="invitee-info" className="invitee-info-container">
                <h2 id='invitee-name'>{mutual.name}</h2>
                <p id='invitee-event'>🕔 {mutual.recentEvent}</p>
            </div>
            <div className={clickedStyle} id='invitee-checkbox'>
                {invites[mutual.id] ? '✓' : null}
            </div>
        </div>
    )
}