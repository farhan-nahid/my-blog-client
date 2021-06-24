import {
  faClipboardList,
  faQuoteLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const { panel } = useParams();
  return (
    <nav id="sidebar">
      <ul className="list-unstyled sidebar-items">
        <li>
          <Link
            to="/dashboard/profile"
            className={panel === "profile" ? "link-active" : ""}
          >
            <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/add-blog"
            className={panel === "add-blog" ? "link-active" : ""}
          >
            <FontAwesomeIcon icon={faQuoteLeft} /> <span>Add Blog</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/manage-blog"
            className={panel === "manage-blog" ? "link-active" : ""}
          >
            <FontAwesomeIcon icon={faClipboardList} /> <span>Manage Blog</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
