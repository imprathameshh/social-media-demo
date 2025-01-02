import React from 'react'
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import CloseFriend from '../closeFriend/CloseFriend';
import { Users } from '../../dummyData';

export default function Sidebar() {
  return (
    <div className='sidebarWrap'>
      <div className="sidebar">
        <div className="sidebarMenu">
          <ul>
            <li>
              <div className="listWrap">
                <RssFeedIcon className='sidebarIcon' />
                <span className='sidebarListText'>
                  Feed
                </span>
              </div>
            </li>
            <li>
              <div className="listWrap">
                <ChatIcon className='sidebarIcon' />
                <span className='sidebarListText'>
                  Chats
                </span>
              </div>
            </li>
            <li>
              <div className="listWrap">
                <VideoSettingsIcon className='sidebarIcon' />
                <span className='sidebarListText'>
                  Videos
                </span>
              </div>
            </li>
            <li>
              <div className="listWrap">
                <GroupsIcon className='sidebarIcon' />
                <span className='sidebarListText'>
                  Groups
                </span>
              </div>
            </li>
            <li>
              <div className="listWrap">
                <BookmarksIcon className='sidebarIcon' />
                <span className='sidebarListText'>
                  Bookmarks
                </span>
              </div>
            </li>
            <li>
              <div className="listWrap">
                <QuestionMarkIcon className='sidebarIcon' />
                <span className='sidebarListText'>
                  Questions
                </span>
              </div>
            </li>
            <li>
              <div className="listWrap">
                <WorkIcon className='sidebarIcon' />
                <span className='sidebarListText'>
                  Jobs
                </span>
              </div>
            </li>
            <li>
              <div className="listWrap">
                <EventAvailableIcon className='sidebarIcon' />
                <span className='sidebarListText'>
                  Events
                </span>
              </div>
            </li>
            <li>
              <div className="listWrap">
                <GolfCourseIcon className='sidebarIcon' />
                <span className='sidebarListText'>
                  Courses
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="btn-wrap">
          <button className='sidebarButton'>Show More</button>
        </div>
        <div className="sidebarFriendList">
          <ul>
            {Users.map(u => (
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
