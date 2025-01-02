import "./online.css"

export default function Online({user}) {
  return (
    <div>
      <li>
        <div className="rightbarFriendWrap">
          <div className="rightbarProfileImg">
            <img src={user.profilePicture} alt="" />
          </div>
          <div className="rightbarUsername">
            {user.username}
          </div>
        </div>
      </li>
    </div>
  )
}
