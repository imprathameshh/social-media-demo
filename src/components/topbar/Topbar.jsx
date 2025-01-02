import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";


export default function Topbar() {
  return (
    <div className="topbarWrap">
      <div className="container">
        <div className="topBar">
          <div className="topbarLeft">
            <div className="logo">
              <a href="">Lamasocials</a>
            </div>
          </div>
          <div className="topbarCenter">
            <div className="searchbar">
              <SearchIcon className="searchIcon" />
              <input
                placeholder="Serch for friends, post or video"
                className="searchInput"
              />
            </div>
          </div>
          <div className="topbarRight">
            <div className="topbarLinks">
              <div className="topbarLink">Homepage</div>
              <div className="topbarLink">Timeline</div>
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <PersonIcon />
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <ChatIcon />
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <NotificationsIcon />
                <span className="topbarIconBadge">1</span>
              </div>
            </div>
            <div className="profileImage">
              <img src="/assets/person/1.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
