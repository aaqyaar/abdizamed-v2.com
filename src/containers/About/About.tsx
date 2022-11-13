import React from "react";
import styles from "styles/About.module.scss";

type Props = {};

export default function About({}: Props) {
  return (
    <section id="about">
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutTitle}>About Me</h1>
        <p className={styles.aboutSubtitle}>
          A Full Stack Developer with 2+ years of experience in designing and
          developing user interfaces, testing, debugging, and training staff
          within modern technologies. Proven ability in optimizing web & mobile
          functionalities that improve data retrieval and workflow efficiencies.
        </p>
      </div>
    </section>
  );
}
