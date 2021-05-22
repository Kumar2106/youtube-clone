/** @format */

import React from "react";
import "./SideBar.css";
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import HomeIcon from "@material-ui/icons/Home";
import VideLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistroyIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function SideBar() {
	return (
		<div className="sidebar">
			<SidebarRow selected Icon={HomeIcon} title="Home" />
			<SidebarRow Icon={WhatshotIcon} title="Trending" />
			<SidebarRow Icon={SubscriptionIcon} title="Subscription" />
			<hr />
			<SidebarRow Icon={VideLibraryIcon} title="Library" />
			<SidebarRow Icon={HistroyIcon} title="History" />
			<SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
			<SidebarRow Icon={WatchLaterIcon} title="WatchLater" />
			<SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
			<SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
			<hr />
		</div>
	);
}

export default SideBar;
