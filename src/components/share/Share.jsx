import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';


export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" />
          <input placeholder="What's in your mind Safak?" className='shareInput' type="text" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareBottomList">
            <ul>
              <li>
                <div className="shareOption">
                  <PermMediaIcon htmlColor="tomato" className='shareIcon' />
                  <span className='shareOptionText'>
                    Photo or Video
                  </span>
                </div>
              </li>
              <li>
                <div className="shareOption">
                  <LabelIcon htmlColor="blue" className='shareIcon' />
                  <span className='shareOptionText'>
                    Tag
                  </span>
                </div>
              </li>
              <li>
                <div className="shareOption">
                  <RoomIcon htmlColor="red" className='shareIcon' />
                  <span className='shareOptionText'>
                    Location
                  </span>
                </div>
              </li>
              <li>
                <div className="shareOption">
                  <EmojiEmotionsIcon htmlColor="goldenrod" className='shareIcon' />
                  <span className='shareOptionText'>
                    Feelings
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="share-btn">
            <button className="shareBtn">Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}
