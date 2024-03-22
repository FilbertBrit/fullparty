import { useState } from "react"
import cancel from "../../images/cancel.png"

export const InvitePrev = ({ invite, invites, setInvites }) => {

    

    const handleDelete = () => {
    
        // delete invites[mutual.id]
        const { [invite[0]]: value, ...remainingInvites } = invites;
        setInvites(remainingInvites);
    }

    return (
        <div className="Invitee-prev" >
            <div id="invitee-user-photo">
                <div className="initials" id='initial-mutual-invitee'>
                    {invite[1].slice(0,1)}
                </div>
            </div>
            <div id="invitee-info" className="invitee-info-prev">
                <h2 id='invitee-name'>{invite[1]}</h2>
            </div>
            <div className="delete-invitee-prev" onClick={handleDelete}>
                <img src={cancel} id="cancel-img" alt="cancel"/>
            </div>
        </div>
    )
}