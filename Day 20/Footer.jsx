import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div>
          <h3>
            Rupee<span>Tracker</span>
          </h3>

          <p>
            India's trusted currency tracking platform.
          </p>
        </div>

        <div>
          <h4>Product</h4>

          <ul>
            <li>Rates</li>
            <li>Converter</li>
            <li>Alerts</li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>

          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>

          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cookies</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 RupeeTracker. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;