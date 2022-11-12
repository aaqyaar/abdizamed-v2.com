// styles
import styles from "styles/_layouts/Navbar.module.scss";
// app
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="#" className={styles.logoContainer}>
            <h1>Abdi Zamed Mohamed</h1>
          </Link>
        </div>
        <div className="menu-nav">
          <ul className={styles.menu}>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
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
      </div>
    </nav>
  );
}
