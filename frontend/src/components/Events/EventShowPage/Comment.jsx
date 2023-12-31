import { useEffect, useState } from "react"
import dots from "../../../images/three-dots.png" 
import pin from "../../../images/pin.png"
import trash from "../../../images/trash.png"
import triangle from "../../../images/triangle.png"
import "./Comment.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { deleteComment } from "../../../store/comments"

export function Comment ({ comment }) {
    // console.log(eventId)
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [notRSVP, setNotRSVP] = useState( comment.commentType === "comment" ? true : false);
    const [showMenu, setShowMenu] = useState(false)
    const date = new Date(comment.date)
    const today = new Date()
    // console.log(comment)
    let commentDate = ''
    const rsvps = {
        "I'm Going": "Going 👍",
        "Maybe": "Maybe 🤔",
        "Can't Go": "Can't 😢"
    }
    // let rsvpComment = !notRSVP ? [comment.body.split(" ").slice(0,1).join(''), rsvps[comment.body.split(" ").slice(1).join(" ")]] : ('');
    let rsvpComment = !notRSVP ? rsvps[comment.body] : ('');
    // console.log(rsvpComment)

    // console.log(rsvpComment);

    if((date.getDay() === today.getDay()) && (date.getMonth() === today.getMonth()) && (date.getFullYear() === today.getFullYear())){
        if(today.getHours() - date.getHours() === 0){
            commentDate = (today.getMinutes() - date.getMinutes() > 1) ? ((today.getMinutes() - date.getMinutes()) + ' minutes ago') : ('about 1 minute ago')
        }else{
            commentDate = (today.getHours() - date.getHours()) > 1 ? ('about ' + (today.getHours() - date.getHours()) + ' hours ago') : ( 'about 1 hour ago' )
        }
    }else if((date.getMonth() === today.getMonth()) && (date.getFullYear() === today.getFullYear())){
        commentDate = (date.getDay() - today.getDay() > 1) ? ((date.getDay() - today.getDay() ) + ' days ago') : ( '1 day ago' )  
    }else if(date.getFullYear() === today.getFullYear() || (today.getMonth() - date.getMonth() < 0)){
        commentDate = ((today.getMonth() - date.getMonth() + 12) > 1) ? (today.getMonth() - date.getMonth() + 12) + ' months ago' : '1 month ago';
    }else{
        commentDate = (date.getFullYear() - today.getFullYear() > 1) ? (date.getFullYear() - today.getFullYear()) + 'years ago' : '1 year ago';
    }

    const handlePin = (e) => {
        e.preventDefault();
        // console.log('pin')
    }
    const handleDelete = (e) => {
        e.preventDefault();
        // console.log('delete')
        dispatch(deleteComment({commentId: comment.id, eventId: comment.eventId}));
    }

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };
    
    useEffect(() => {
        if (!showMenu) return;
    
        const closeMenu = () => {
          setShowMenu(false);
        };
    
        document.addEventListener('click', closeMenu);
      
        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

    return notRSVP ? (
        <div>
            <div className="comment-container-item">
                <div className="comment-container-author-body">
                    <div className="user-profile-photo">
                        <div className="initials">
                        {comment.author.slice(0,1)}
                        </div>
                    </div>
                    <div className="comment-body-container">
                        <div className="comment-author-container">{comment.author} <span id='author-commented'>commented</span> 💬</div>
                        <div className="comment-date">{commentDate}</div>
                        <div className="comment-body">{comment.body}</div>
                    </div>
                </div>
                <div className="edit-comment-btn" onClick={openMenu}>
                    <img src={dots} width='20px' height='20px'/>
                </div>
            </div>
            <div>
                { showMenu && (
                    <>
                        <div className="comment-menu">
                            <div className="comment-menu-inner-div">
                                <div className="comment-menu-option-container" onClick={handlePin}>
                                    <img id='comment-menu-img' src={pin}/>
                                    <h3 id="comment-menu-h3-pin">Pin</h3>
                                </div>
                                <div className="comment-menu-option-container" onClick={handleDelete}>
                                    <img id='comment-menu-img' src={trash}/>
                                    <h3 id='comment-menu-h3-trash'>Remove</h3>
                                </div>
                            </div>
                            <div className="arrow-comment-menu">
                                <img src={triangle} id="comment-menu-img"/>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    ) : (
            <div className="comment-container-item">
                <div className="comment-container-author-body">
                    <div className="user-profile-photo-rsvp">
                        <div className="initials">
                        {comment.author.slice(0,1)}
                        </div>
                    </div>
                    <div className="comment-body-container">
                        <div className="comment-author-container">{comment.author} <span id='author-commented'>{comment.body.includes('updated') ? (' updated their rsvp to ') : (' rsvped ')}</span> <span id='rsvp-comment'> { rsvpComment }</span> </div>
                        {/* <div className="comment-body">{comment.body}</div> */}
                        <div className="comment-date">{commentDate}</div>
                    </div>
                </div>
            </div>
            // <div className="comment-container-item">
            //     <div className="user-profile-photo">
            //         <div className="initials">
            //             {comment.author.slice(0,1)}
            //         </div>
            //     </div>
            //     <div className="comment-body">
            //         <div className="comment-author-container">{comment.author}</div>
            //         <div className="comment-date">{comment.date}</div>
            //     </div>
            // </div>
    )
}