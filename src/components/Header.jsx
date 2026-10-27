import { Link, NavLink } from "react-router-dom";
import RandomPumpkins from "../components/RandomPumpkins";

function Header() {
  const getLinkStyle = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive ? "text-yellow-500" : "hover:text-yellow-300"
    }`;
  return (
    <header>
      <RandomPumpkins count={100} />

      <nav
        aria-label="Main navigation"
        className="py-3 text-[var(--mint-fresh)] bg-[#2d0f3f] md:px-12"
      >
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Link
              to="/"
              className="group flex items-center text-2xl no-underline font-AlegreyaSC font-bold md:text-[3em] md:mb-0"
            >
              <svg
                className="transition-all duration-300 scale-0 opacity-0 group-hover:scale-125 group-hover:opacity-100"
                xmlns="http://w3.org"
                viewBox="0 0 100 100"
                width="50"
                height="50"
              >
                <path
                  d="M47 25 C47 18 49 12 55 10 C53 14 55 19 58 24 Z"
                  fill="#4a7c59"
                />

                <ellipse cx="50" cy="58" rx="14" ry="28" fill="#d97706" />
                <ellipse cx="40" cy="58" rx="13" ry="26" fill="#f59e0b" />
                <ellipse cx="60" cy="58" rx="13" ry="26" fill="#f59e0b" />
                <ellipse cx="30" cy="60" rx="10" ry="22" fill="#d97706" />
                <ellipse cx="70" cy="60" rx="10" ry="22" fill="#d97706" />
              </svg>
              Campire Cooking
            </Link>
          </div>
          <ul className="font-AlegreyaSC list-none flex flex-wrap justify-center gap-6 md:text-xl">
            <li>
              <NavLink to="/" end className={getLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/AboutPage" className={getLinkStyle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/MenuPage" className={getLinkStyle}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={getLinkStyle}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
