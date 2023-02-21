import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/assets/navLogo.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const links = ["Home", "About", "Skills", "Projects", "Contact"];
const icons = [
  { id: 1, img: <FaLinkedinIn /> },
  { id: 2, img: <FaGithub /> },
  { id: 3, img: <AiOutlineMail /> },
  { id: 4, img: <BsPersonLinesFill /> },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={logo} alt="/" width="auto" height="50" />
        <ul className="hidden md:flex">
          {links.map((link) => (
            <Link href={"/"} key={link}>
              <li className="ml-10 text-sm uppercase hover:border-b">{link}</li>
            </Link>
          ))}
        </ul>

        <div className="md:hidden" onClick={handleNav}>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={logo} alt="/" width={87} height="auto" />
              <div
                onClick={handleNav}
                className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className=" border-b border-gray-300 my-4">
              <p className=" w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className=" py-4 flex flex-col">
            <ul className=" uppercase">
              {links.map((link) => (
                <Link href={"/"} key={link}>
                  <li className="py-4 text-sm">{link}</li>
                </Link>
              ))}
            </ul>

            <div className=" pt-40">
              <p className=" uppercase tracking-widest text-principal">
                Let's Connect
              </p>
              <div className=" flex items-center justify-between my-4 w-full sm:w-[80%]">
                {icons.map((icon) => (
                  <div
                    className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                    key={icon.id}
                  >
                    {icon.img}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
