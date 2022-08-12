import "./NavBarLoggIn.css";

import MainLogo from "./shared-components/MainLogo";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <MainLogo />
      <div className="navBar-items">
        <div className="navBar-item underline">Home</div>
        <div className="navBar-item underline">Community</div>
        <div className="navBar-item underline">
          <a href="/dashboard">Patient Info</a>
        </div>
        <div className="navBar-item underline">Blogs</div>
        <div className="navBar-item underline">About Us</div>
        <div className="navBar-item underline">Contact</div>
        <div className="navBar-item profile">
          <span className="profile-image"></span>{" "}
          <p className="profile-name">Rameshwor Nepal</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
