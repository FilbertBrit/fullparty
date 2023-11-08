import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import wazzap from "../../images/wazzap-halloween.jpeg"
import "./UserProfile.css"

export function UserProfile () {
    const sessionUser = useSelector(state => state.session.user);
    const profile = useParams();

    if (sessionUser.id != profile.userId) return <Redirect to="/events" />;



    return (
        <>
            <Navigation/>
            <div className="profile-layout">
                <div className="profile-edit-options-div">
                    <div className="profile-user-photo">
                        <img src={wazzap} alt="show-img" id='profile-img'/>
                    </div>
                    <div className="profile-user-edit">
                        <button id='edit-profile-btn'>EDIT PROFILE</button>

                    </div>
                </div>
                <div className="profile-details-div">
                    <div className="profile-user-name">
                        {sessionUser.name}
                    </div>
                    <div className="profile-user-bio">  
                        <h3 id="user-profile-details">bio</h3>
                    </div>
                    <div className="profile-user-socials">
                        <h3>Socials</h3>
                    </div>
                    <div className="profile-user-join-date">
                        <h3 id="user-profile-details">Joined Jul '22</h3>
                    </div>
                    <div className="profile-user-achievments">
                        <h3>Achievments</h3>
                    </div>
                </div>
            </div>
            
        </>
    )
}