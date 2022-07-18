import React, { useState } from "react";
import "./sidebar.scss";
import Logo from "../../assets/svgs/logo.svg";
import LogoSM from "../../assets/svgs/logo-sm.svg";
import {
  faCalendarDays,
  faGear,
  faCircleQuestion,
  faAddressBook,
  faCaretRight,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSideBar() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={isOpen ? "navigation open" : "navigation"}>
      <div className="side-nav">
        <a className="logo" href="#/">
          <img className="bg" alt="logo" src={Logo} />
          <img className="sm" alt="small logo" src={LogoSM} />
        </a>
        <div className="toggleIcon" onClick={toggleSideBar}>
          <FontAwesomeIcon icon={faCaretRight} />
          <FontAwesomeIcon icon={faCaretLeft} />
        </div>
      </div>

      <ul className="nav-link">
        <li className="active">
          <a href="#/events">
            <span className="icon">
              <FontAwesomeIcon icon={faCalendarDays} />
            </span>
            <span className="item">Events</span>
          </a>
        </li>
        <li>
          <a href="#/setting">
            <span className="icon">
              <FontAwesomeIcon icon={faGear} />
            </span>
            <span className="item">Setting</span>
          </a>
        </li>
        <li>
          <a href="#/contact">
            <span className="icon">
              <FontAwesomeIcon icon={faAddressBook} />
            </span>
            <span className="item">Contact</span>
          </a>
        </li>
        <li>
          <a href="#/help">
            <span className="icon">
              <FontAwesomeIcon icon={faCircleQuestion} />
            </span>
            <span className="item">Help</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
