import { Link } from "react-router";

export default function FooterFooter() {
  return (
    <footer
      className={location.pathname === "/login" ? "md:right-0" : "md:left-0"}
    >
      <div className="copyright-section">
        <h2 className="font-logo">Zetavex</h2>
        <p>© 2026 | All rights reserved.</p>
      </div>
      <div className="footer-links-section">
        <Link to={""} className="secondary-link">
          Legal
        </Link>
        <Link to={""} className="secondary-link">
          Support
        </Link>
      </div>
    </footer>
  );
}
