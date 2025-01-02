import "./userinfo.css"

export default function UserInfo() {
  return (
    <div>
      <div className="profileRightTop">
        <div className="profileCover">
          <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
          <div className="profileMedia">
            <img className="profielUserImg" src="assets/post/7.jpeg" alt="" />
          </div>
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">Safak Kocaoglu</h4>
          <p className="profileInfoDesc">Hello my friends!</p>
        </div>
      </div>
    </div>
  )
}
