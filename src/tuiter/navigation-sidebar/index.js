import React from "react";
import {NavLink} from "react-router-dom";
import {
  faHome,
  faHashtag,
    faEllipsis
} from "@fortawesome/free-solid-svg-icons";
import {faBell, faEnvelope, faBookmark, faListAlt, faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavigationSidebar = () => {
  return (
      <div className="list-group">
        <a className="list-group-item">Tuiter</a>
        <NavLink to="/tuiter/" end className={`list-group-item`}>
          <FontAwesomeIcon icon={faHome}/><span
            className="d-none d-xl-inline ms-2">Home</span>
        </NavLink>
        <NavLink to="/tuiter/explore" className={`list-group-item`}>
          <FontAwesomeIcon icon={faHashtag}/><span
            className="d-none d-xl-inline ms-2">Explore</span>
        </NavLink>
        <a className={`list-group-item`}>
          <FontAwesomeIcon icon={faBell}/><span
            className="d-none d-xl-inline ms-2">Notifications</span>
        </a>
        <a className={`list-group-item`}>
          <FontAwesomeIcon icon={faEnvelope}/><span
            className="d-none d-xl-inline ms-2">Messages</span>
        </a>
        <a className={`list-group-item`}>
          <FontAwesomeIcon icon={faBookmark}/><span
            className="d-none d-xl-inline ms-2">Bookmarks</span>
        </a>
        <a className={`list-group-item`}>
          <FontAwesomeIcon icon={faListAlt}/><span
            className="d-none d-xl-inline ms-2">List</span>
        </a>
        <a className={`list-group-item`}>
          <FontAwesomeIcon icon={faUser}/><span
            className="d-none d-xl-inline ms-2">Profile</span>
        </a>
        <a className={`list-group-item`}>
          <FontAwesomeIcon icon={faEllipsis}/><span
            className="d-none d-xl-inline ms-2">More</span>
        </a>
      </div>
  );
};

export default NavigationSidebar;