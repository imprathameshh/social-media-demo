import "./closefriend.css"

export default function CloseFriend({ user }) {
  return (
    <div>
      <li>
        <div className="sidebarFriend">
          <img className='sidebarFriendImg' src={user.profilePicture} alt="" />
          <span className='sidebarFriendName'>{user.username}</span>
        </div>
      </li>
    </div>
  )
}
