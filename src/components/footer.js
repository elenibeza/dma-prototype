import React from 'react';
import logo from '../images/United_States_Department_of_Defense_Seal.svg.png';
import customcss from '';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href="https://web.dma.mil">
                <img src={logo} width="50" alt="Agency logo" />
              </a>
            </div>
          </div>
          <div className="tablet:grid-col">
          <ul className="add-list-reset">
              <li>About DoD</li>
              <li> No Fear</li>
              <li>USA.gov
              <li> Privacy and Security</li>
              <li></li>EEO</li>
            </ul>
          </div>
          <div className="tablet:grid-col">
          <ul className="add-list-reset">
              <li>Contact Us</li>
              <li>Plain Language</li>
              <li>FOIA</li>
              <li>DOD IG</li>
              <li>DOD Jobs</li>
            </ul>
          </div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li>Small Business Office</li>
              <li>Accessibility</li>
              <li>Link Disclaimer</li>
              <li>DOD Web Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>

);

export default Footer;
