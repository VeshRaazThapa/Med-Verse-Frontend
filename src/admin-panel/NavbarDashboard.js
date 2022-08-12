import "./NavbarDashboard.css";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

function NavbarDashboard() {
  return (
    <div className="dsbd-navbar">
      <div className="dsbd-navbar__title">
        <h1>Patient Dashboard</h1>
      </div>
      <div className="dsbd-navbar__searchbar">
        <input type="text" placeholder="Search" className="search-field" />
        <div className="serch-icon">
          <SearchIcon fontSize="large" />
        </div>
      </div>
      <div className="dsbd-navbar__menuItems">
        <div className="menuItems-icon">
          <MessageIcon />
        </div>
        <div className="menuItems-icon">
          <NotificationsIcon />
        </div>
        <div className="menuItems-icon">
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default NavbarDashboard;
