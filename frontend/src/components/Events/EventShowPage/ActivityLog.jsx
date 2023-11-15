import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { createComment, fetchComments } from "../../../store/comments";
import "./ActivityLog.css"
import { Comment } from "./Comment";

export function ActivityLog () {
    const { eventId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const commentsObj = useSelector(state => state.comments);
    const comments = commentsObj ? Object.values(commentsObj) : [];
    // console.log(commentsObj, comments);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createComment({body: comment, authorId: sessionUser.id, eventId: eventId, commentType: 'comment'})).then( res => setComment(""))
    }

    useEffect( () => {
        // dispatch(fetchComments(eventId))
        // console.log('hi')
    }, [commentsObj])

    return comments ? (
        <>
            <div className="show-rsvps-comments-header">
                <h2 id='show-activity-header'>Activity</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit} id="comment-form">
                    <div className="user-profile-photo-form">
                            <div className="initials">
                            {sessionUser.name.slice(0,1)}
                            </div>
                    </div>
                    <input type="text" 
                        value={comment}
                        onChange={ (e) => setComment(e.target.value) }
                        required
                        placeholder="+ Add a comment"
                        id='comment-input-form'
                    />
                </form>
            </div>
            <div className="comment-log">
                { comments.reverse().map( (comment, i) => 
                    <Comment comment={comment} key={i}/>)
                    // <Comment/>
                }
                
            </div>
        </>
    ) : null;
}