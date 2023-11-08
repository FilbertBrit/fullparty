import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

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

                    </div>
                    <div className="profile-user-edit">

                    </div>
                </div>
                <div className="profile-details-div">
                    <div className="profile-user-name">
                        {sessionUser.name}
                    </div>
                    <div className="profile-user-bio">

                    </div>
                    <div className="profile-user-socials">

                    </div>
                    <div className="profile-user-join-date">

                    </div>
                    <div className="profile-user-achievments">

                    </div>
                </div>
            </div>
            
        </>
    )
}