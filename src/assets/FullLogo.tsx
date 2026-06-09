import { useState, useEffect } from "react";

export default function fulllogo() {
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
    <>
      {darkMode ? (
        <img
          src="https://assets.klirond.workers.dev/primary-full-logo-dark-bg.svg"
          alt="KLIROND logo"
          className="full-logo-svg"
        />
      ) : (
        <img
          src="https://assets.klirond.workers.dev/primary-full-logo-light-bg.svg"
          alt="KLIROND logo"
          className="full-logo-svg"
        />
      )}
    </>
  );
}
