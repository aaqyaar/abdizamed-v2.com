"use client";
// styles
import styles from "styles/Navbar.module.scss";
// app
import React from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

type Props = {};

interface INav {
  href: string;
  title: string;
  target?: string;
}
const navigation: INav[] = [
  { title: "Blogs", href: "/blogs" },
  {
    title: "Github",
    href: "https://www.github.com/abdi-aaqyaar",
    target: "_blank",
  },
];

const RenderNavContent = ({ title, href, target }: INav) => {
  return (
    <li>
      <Link href={href} target={target}>
        {title}
      </Link>
    </li>
  );
};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="#" className={styles.logoContainer}>
            <h1>Abdi Zamed Mohamed</h1>
          </Link>
        </div>
        <div id="desktop-menu-nav">
          <ul className={styles.nav}>
            {navigation.map((nav: INav, i) => (
              <RenderNavContent key={i} {...nav} />
            ))}
            {/* resume pdf */}
            <li>
              <Link href="/abdizamed.pdf" download className={styles.resumeBtn}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.menu}>
          {isOpen ? (
            <AiOutlineClose
              onClick={() => setIsOpen((prev) => !prev)}
              className={styles.menuIcon}
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setIsOpen((prev) => !prev)}
              className={styles.menuIcon}
            />
          )}
        </div>
      </div>
      <div id="mobile-nav">
        {isOpen && (
          <ul className={styles.mobileNav}>
            {navigation.map((nav: INav, i) => (
              <RenderNavContent key={i} {...nav} />
            ))}
            {/* resume pdf */}
            <li>
              <Link href="/abdizamed.pdf" download className={styles.resumeBtn}>
                Resume
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
