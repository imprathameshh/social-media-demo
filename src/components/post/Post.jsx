import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {

  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandle = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  };

  return (
    <div className="postWrap">
      <div className="post">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
            <div className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</div>
            <div className="postDate">{post.date}</div>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post?.desc}</div>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandle} alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{post.comment}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
