import Link from "next/link";
import React from "react";
import { AiOutlineDownload, AiOutlineInbox } from "react-icons/ai";
import styles from "styles/Hero.module.scss";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>
        Hi, {"I'm"} <span className={styles.heroName}>Abdi Zamed</span>
      </h1>
      <p className={styles.heroSubtitle}>
        A Full Stack Developer with 2+ years of experience in designing and{" "}
        <br />
        developing user interfaces, testing, debugging, and training staff{" "}
        <br />
        within modern technologies. Proven ability in optimizing web & mobile{" "}
        <br />
        functionalities that improve data retrieval and workflow efficiencies.
      </p>

      <div id="hero-btn" className={styles.heroBtnContainer}>
        <Link href="/abdizamed.pdf" className={styles.heroBtn}>
          <AiOutlineDownload className={styles.heroBtnIcon} />
          Resume
        </Link>
        <Link href="#contact" className={styles.heroBtn}>
          <AiOutlineInbox className={styles.heroBtnIcon} />
          Contact
        </Link>
      </div>
    </div>
  );
}
