import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

// importing materialUi icons for sidebar
import HomeIcon from "@mui/icons-material/Home";
import TwitterIcon from "@mui/icons-material/Twitter";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VerifiedIcon from "@mui/icons-material/Verified";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Button } from "@material-ui/core"; //maaterial ui button
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.bgLighter};
  }
`;

const Sidebar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="sidebar">
      {/* sidebar option  */}
      <TwitterIcon className="sidebar__twitterIcon " />
      {/* we want home icon to be active(highlighted) */}
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={ExploreIcon} text="Explore" />
      <SidebarOption Icon={NotificationsActiveIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={VerifiedIcon} text="Verified" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      
      <Item onClick={() => setDarkMode(!darkMode)}>
        <SidebarOption
          Icon={LightModeIcon}
          text={darkMode ? "Light Mode" : "Dark Mode"}
        />
      </Item>
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
