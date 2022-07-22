import React, { useState } from "react";
import "./sidebar.scss";
import Logo from "../../assets/svgs/logo.svg";
import LogoSM from "../../assets/svgs/logo-sm.svg";
import {
  faCaretRight,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigationconfig, NavigationconfigType } from "./NavigationConfig";

const SideBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }

  const mapNavigationMenus: React.FC<any> = (config: NavigationconfigType[]) => {
    return <ul className="nav-link">
      {config.map((item, index) => <li className={index === 0 ? "active" : ""}>
        <a href={item.route}>
          <span className="icon">
            <FontAwesomeIcon icon={item.icon} />
          </span>
          <span className="item">{item.name}</span>
        </a>
      </li>)}
    </ul>
  }

  return (
    <div className={isOpen ? "navigation open" : "navigation"}>
      <div className="side-nav">
        <a className="logo" href="/">
          <img className="bg" alt="logo" src={Logo} />
          <img className="sm" alt="small logo" src={LogoSM} />
        </a>
        <div className="toggleIcon" onClick={toggleSideBar}>
          <FontAwesomeIcon icon={faCaretRight} />
          <FontAwesomeIcon icon={faCaretLeft} />
        </div>
      </div>
      {mapNavigationMenus(Navigationconfig)}
    </div>
  );
};

export default SideBar;
