import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <div className="birthdayImg">
            <img src="assets/gift.png" alt="" />
          </div>
          <div className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </div>
        </div>
        <div className="rightbarAd">
          <img src="assets/ad.png" alt="" />
        </div>
        <div className="rightbarTitle">
          <h4>Online Friend</h4>
        </div>
        <div className="rightbarFriendList">
          <ul>
            {Users.map(u => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </>
    )
  }
  const ProfileRightbar = () => {
    return (
      <>
        <div className="userMoreInfo">
          <div className="rightTitle">
            <h4>User Information</h4>
          </div>
          <div className="rightbarInfo">
            <ul>
              <li>
                <div className="rightbarInfoItem">
                  <div className="rightbarInfoKey">
                    City:
                  </div>
                  <div className="rightbarInfoValue">
                    New York
                  </div>
                </div>
              </li>
              <li>
                <div className="rightbarInfoItem">
                  <div className="rightbarInfoKey">
                    From:
                  </div>
                  <div className="rightbarInfoValue">
                    Madrid
                  </div>
                </div>
              </li>
              <li>
                <div className="rightbarInfoItem">
                  <div className="rightbarInfoKey">
                    Relationship:
                  </div>
                  <div className="rightbarInfoValue">
                    Single
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="userFriends">
          <div className="rightTitle">
            <h4>User friends</h4>
          </div>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
              <div className="rightbarFollowingName"> John</div>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
              <div className="rightbarFollowingName"> John</div>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
              <div className="rightbarFollowingName"> John</div>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
              <div className="rightbarFollowingName"> John</div>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
              <div className="rightbarFollowingName"> John</div>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
              <div className="rightbarFollowingName"> John</div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightBarWrap'>
      <div className="rightBar">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
