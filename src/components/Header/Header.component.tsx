import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { Link } from "react-router-dom";

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleDarkMode = () => {
    if (theme === "dracula") setTheme("lemonade");
    else setTheme("dracula");
  };

  return (
    <a className="link" onClick={toggleDarkMode}>
      {theme === "dracula" ? <>Light mode</> : <>Dark mode</>}
    </a>
  );
}

function Header() {
  return (
    <header>
      <nav className="flex w-full items-center justify-between py-2 border-b ">
        <ul className="mr-auto flex flex-row">
          <li className="link">
            <Link to="/" className="">
              Agents
            </Link>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}

export default Header;
