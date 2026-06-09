import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Footer() {
  let [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  const windowObj = window.matchMedia("(prefers-color-scheme: dark)");

  function handleDarkMode(isDark: boolean) {
    document.documentElement.classList.toggle("dark");
    setDarkMode(isDark);
  }

  useEffect(() => {
    windowObj.addEventListener("change", (e) => handleDarkMode(e.matches));

    return () =>
      windowObj.removeEventListener("change", (e) => handleDarkMode(e.matches));
  }, []);

  return (
    <footer>
      <div className="copyright-section">
        {darkMode ? (
          <img
            src="https://assets.klirond.workers.dev/unicolor-full-logo-light-bg-1.svg"
            alt="KLIROND logo"
            width="100"
          />
        ) : (
          <img
            src="https://assets.klirond.workers.dev/unicolor-full-logo-light-bg.svg"
            alt="KLIROND logo"
            width="100"
          />
        )}
        <p>© 2026 | All rights reserved.</p>
      </div>
      <div className="footer-links-section">
        <Link to={"/"} className="secondary-link">
          Legal
        </Link>
        <Link to={"/"} className="secondary-link">
          Support
        </Link>
      </div>
    </footer>
  );
}
