import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";

const navLinkStyle = `cursor-pointer hover:scale-110`;

const Nav = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={` m-auto flex fixed text-white transition-all duration-1000 ease-in-out ${
        color && "bg-[#00001E] bg-opacity-80 lg:bg-opacity-90"
      } p-5 w-full z-20`}
    >
      <h3>
        <span className="font-semibold">AC </span>STUDIOS
      </h3>
      <div className="ml-auto z-10"></div>
      <ul className=" gap-3 flex ">
        <li className={navLinkStyle}>About</li>
        <li className={navLinkStyle}>Work</li>
        <li className={navLinkStyle}>Contact</li>
      </ul>
      <ul className="ml-4 gap-2 flex ">
        <li>
          <AiFillGithub size={24} />
        </li>
        <li>
          <AiFillLinkedin size={24} />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
