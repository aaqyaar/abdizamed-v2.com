"use client";
// styles
import styles from "styles/Navbar.module.scss";
// app
import React from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

type Props = {};

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
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>

            <li>
              <Link
                href="/images/abdizamed.svg"
                download
                className={styles.resumeBtn}
              >
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
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>

            <li>
              <Link
                href="/images/abdizamed.svg"
                download
                className={styles.resumeBtn}
              >
                Resume
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
