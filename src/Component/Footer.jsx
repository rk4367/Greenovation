import React from "react";
import "../Css/Footer.css";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__feedbackSection">
        <div className="footer__feedbackPrompt">We'd love to hear what you think!</div>
        <div className="footer__feedbackButtons">
          <button className="footer__feedbackButton">Give feedback</button>
          <button className="footer__feedbackButton" onClick={scrollToTop}>Back to top</button>
        </div>
      </div>
      <div className="footer__linkContainer footer__linkContainer--row">
        <a className="footer__link" href="#">All Departments</a>
        <a className="footer__link" href="#">Store Directory</a>
        <a className="footer__link" href="#">Careers</a>
        <a className="footer__link" href="#">Our Company</a>
        <a className="footer__link" href="#">Sell on Walmart.com</a>
        <a className="footer__link" href="#">Help</a>
        <a className="footer__link" href="#">Product Recalls</a>
        <a className="footer__link" href="#">Accessibility</a>
        <a className="footer__link" href="#">Tax Exempt Program</a>
        <a className="footer__link" href="#">Get the Walmart App</a>
        <a className="footer__link" href="#">Safety Data Sheet</a>
        <a className="footer__link" href="#">Terms of Use</a>
        <a className="footer__link" href="#">Privacy Notice</a>
        <a className="footer__link" href="#">California Supply Chain Act</a>
        <a className="footer__link" href="#">Your Privacy Choices</a>
        <a className="footer__link" href="#">Notice at Collection</a>
        <a className="footer__link" href="#">AdChoices</a>
        <a className="footer__link" href="#">Consumer Health Data Privacy Notices</a>
        <a className="footer__link" href="#">Brand Shop Directory</a>
        <a className="footer__link" href="#">Pharmacy</a>
        <a className="footer__link" href="#">Walmart Business</a>
        <a className="footer__link" href="#">#IYWYK</a>
        <a className="footer__link" href="#">Delete Account</a>
      </div>
      <div className="footer__copyright">
        © 2025 Walmart. The trademarks Walmart and the Walmart Spark design are registered with the US Patent and Trademark Office. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;