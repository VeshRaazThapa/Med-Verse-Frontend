import "./Footer.css";
import MainLogo from "../shared-components/MainLogo";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="frist-row">
          {" "}
          <MainLogo addClass="white-col" />
          <div className="subs-container">
            <p className="subscribe-title">Subscribe to MedVerse</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="email-input"
            />
            <button className="subs-btn">Subscribe Now</button>
          </div>
        </div>
        <div className="second-row"></div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
