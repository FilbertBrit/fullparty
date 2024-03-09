import { useState } from "react"

export const MutualInvitee = ({ mutual }) => {

    const [clicked, setClicked] = useState(false);
    const [clickedStyle, setClickedStyle] = useState('invitee-checkbox-unchecked');
    // console.log(clickedStyle, clicked)

    const handleClick = () => {
        if(clicked === false){
            setClicked(true);
            setClickedStyle('invitee-checkbox-checked');
        }else{
            setClicked(false);
            setClickedStyle('invitee-checkbox-unchecked');
        }
    }

    return (
        <div className="MutualInvitee" onClick={ () => handleClick()}>
            <div id="invitee-user-photo">
                <div className="initials" id='initial-mutual-invitee'>
                    {mutual.name.slice(0,1)}
                </div>
            </div>
            <div id="invitee-info">
                <h2 id='invitee-name'>{mutual.name}</h2>
                <p id='invitee-event'>🕔 {mutual.recentEvent}</p>
            </div>
            <div className={clickedStyle} id='invitee-checkbox'>
                {clicked ? '✓' : null}
            </div>
        </div>
    )
}