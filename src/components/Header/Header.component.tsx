import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { Link } from "react-router-dom";

import "./Header.styles.css";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <header>
      <nav className="flex w-full items-center justify-between py-2 border-b border-b-primary dark:border-b-primary-dark">
        <ul className="mr-auto flex flex-row">
          <li className="link">
            <Link to="/" className="">
              Agents
            </Link>
          </li>
        </ul>
        <a className="link" onClick={toggleDarkMode}>
          {theme === "dark" ? <>Light mode</> : <>Dark mode</>}
        </a>
      </nav>
    </header>
  );
}

export default Header;
