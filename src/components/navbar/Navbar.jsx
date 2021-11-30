import { NavbarContainer } from "./navbarStyles";
import { links } from "../../utils/constant";
import { FiMoon } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AiFillGithub } from "react-icons/ai";

const getLocalStore = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [theme, setTheme] = useState(getLocalStore());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = 0);
  };

  const handleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <NavbarContainer className={isScroll ? "scroll" : null}>
      <div className={`container ${active ? "activo" : null}`}>
        <p>Francisco</p>

        <div className="menu">
          <ul>
            {links.map((link) => {
              const { text, icon, url } = link;
              return (
                <li>
                  <Link to={url} spy={true} smooth={true} duration={100}>
                    {icon}
                    <span>{text}</span>
                  </Link>
                </li>
              );
            })}

            <li>
              <a href="https://github.com/frmardonesv">
                <AiFillGithub />
                <span>GIT</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="icons">
          <FiMoon size="1.7rem" onClick={() => handleTheme()} />
          {active ? (
            <AiOutlineClose
              className="close"
              onClick={() => setActive(false)}
            />
          ) : (
            <BsGrid ckassName="open" onClick={() => setActive(true)} />
          )}
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
