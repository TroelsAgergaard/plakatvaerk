import { useState } from "react";
import { Link } from "@reach/router";
import Navitem from "./Navitem";
import { BiCrop, BiImageAdd, BiText, BiCreditCard } from "react-icons/bi";

const Nav = () => {
  let [showIconAlt, setShowIconAlt] = useState(true);
  let props = {
    showIconAlt: showIconAlt,
    setShowIconAlt: setShowIconAlt,
  };
  return (
    <nav className="flexContainer">
      <Link to="view/start">
        <Navitem altText="Start" {...props}>
          <BiImageAdd />
        </Navitem>
      </Link>
      <Link to="view/juster">
        <Navitem altText="Juster" {...props}>
          <BiCrop />
        </Navitem>
      </Link>
      <Link to="view/tekst">
        <Navitem altText="Tekst" {...props}>
          <BiText />
        </Navitem>
      </Link>
      <Link to="view/bestil">
        <Navitem altText="Bestil" {...props}>
          <BiCreditCard />
        </Navitem>
      </Link>
    </nav>
  );
};

export default Nav;
