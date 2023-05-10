import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Popup from "reactjs-popup";



function Sidebar(){
    return (
      <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon" />

        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineOutlinedIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmark" />
        <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

        {/* Button -> Tweet */}
        <button className="tweetButton">Tweet</button>

        <SidebarOption Icon={MoreHorizOutlinedIcon} text="cherié 🌸 " />
      </div>
    );
}

export default Sidebar;
