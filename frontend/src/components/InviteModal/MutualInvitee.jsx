// component for viewing/choosing a mutual to invite

import { useEffect, useState } from "react";

export const MutualInvitee = ({ mutual, invites, setInvites }) => {

    const [clicked, setClicked] = useState(invites[mutual.id] ? true : false);
    const [clickedStyle, setClickedStyle] = useState(invites[mutual.id] ? 'invitee-checkbox-checked' : 'invitee-checkbox-unchecked' );

    const handleClick = () => {
        if(clicked === false){
            const updatedInvites = {
                ...invites,
                [mutual.id]: mutual.name
              };
            setInvites(updatedInvites);
            setClicked(true);
        }else{
            const { [mutual.id]: value, ...remainingInvites } = invites;
            setInvites(remainingInvites);
            setClicked(false);
        }
    }
    useEffect( () => {
        invites[mutual.id] ? setClickedStyle('invitee-checkbox-checked') : setClickedStyle('invitee-checkbox-unchecked')
    }, [invites, mutual]) // these are the dependents becuase component can exist but the mutual or
                          // invitee status could change UI needs to reflect changes

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