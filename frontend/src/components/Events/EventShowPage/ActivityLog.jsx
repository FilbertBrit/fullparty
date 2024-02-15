import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { createComment } from "../../../store/comments";
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
    // console.log('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createComment({body: comment, authorId: sessionUser.id, eventId: eventId, commentType: 'comment'})).then( res => setComment(""))
    }

    useEffect( () => {
        // dispatch(fetchComments(eventId))
        // console.log('hi')
    }, [commentsObj])
    // Function to dynamically adjust the height of the textarea based on content
    const autoResizeTextarea = (event) => {
        const textarea = event.target;
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight - 20) + 'px';
    };

    return comments ? (
        <>
            {/* <div className="show-rsvps-comments-header">
                <h2 id='show-activity-header'>Activity</h2>
            </div> */}
            <div>
                <form onSubmit={handleSubmit} id="comment-form">
                    <div className="user-profile-photo-form">
                            <div className="initials">
                            {sessionUser.name.slice(0,1)}
                            </div>
                    </div>
                    {/* <input  */}
                    <textarea
                        type="text" 
                        value={comment}
                        onChange={ (e) => setComment(e.target.value) }
                        onInput={autoResizeTextarea}
                        required
                        placeholder="+ Add a comment"
                        id='comment-input-form'
                        style={{ height: '20px' }}
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