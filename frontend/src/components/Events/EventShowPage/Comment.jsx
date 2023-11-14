import { useEffect, useState } from "react"
import dots from "../../../images/three-dots.png" 
import pin from "../../../images/pin.png"
import trash from "../../../images/trash.png"
import triangle from "../../../images/triangle.png"
import "./Comment.css"
import { useSelector } from "react-redux";

export function Comment ({ comment }) {
    const sessionUser = useSelector(state => state.session.user)
    const [notRSVP, setNotRSVP] = useState( comment.commentType === "comment" ? true : false);
    const [showMenu, setShowMenu] = useState(false)
    const date = new Date(comment.date)
    const today = new Date()
    let commentDate = ''
    console.log(date.getDay(), today.getDay())
    if((date.getDay() === today.getDay()) && (date.getMonth() === today.getMonth()) && (date.getFullYear() === today.getFullYear())){
        commentDate = ('about ' + (today.getHours() - date.getHours()) + ' hours ago')
    }else if((date.getMonth() === today.getMonth()) && (date.getFullYear() === today.getFullYear())){
        commentDate = ((today.getDay() - date.getDay()) + ' days ago')   
    }else if(date.getFullYear() === today.getFullYear()){
        commentDate = (date.getMonth() - today.getMonth()) + 'months ago';
    }else{
        commentDate = (date.getFullYear() - today.getFullYear()) + 'years ago';
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
                                <div className="comment-menu-option-container">
                                    <img id='comment-menu-img' src={pin}/>
                                    <h3 id="comment-menu-h3-pin">Pin</h3>
                                </div>
                                <div className="comment-menu-option-container">
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
            <div className="user-profile-photo">
                <div className="initials">
                {comment.author.slice(0,1)}
                </div>
            </div>
            <div className="comment-body">
                <div className="comment-author-container">{comment.author}</div>
                <div className="comment-date">{comment.date}</div>
            </div>
        </div>
    )
}