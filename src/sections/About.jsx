import React from "react";
import styles from "./About.module.css";
import creativeDesign from "../assets/video/coverr-video.mp4";
import MetricsSection from "../components/MetricSection";
const About = () => {
  return (
    <section>
      <div className={styles.aboutVideoContainer}>
        <video
          className={styles.aboutVideo}
          src={creativeDesign}
          autoPlay
          loop
          muted
          controls
          alt="Video downloaded on [Coverr](https://coverr.co)"
        />
      </div>

      <article className={styles.aboutContent}>
        Cudose Creative is a design agency that specializes in creating
        stunning, user-friendly websites and applications. Our team of
        experienced designers and developers work together to bring your vision
        to life, ensuring that your digital presence is not only visually
        appealing but also functional and effective.
      </article>

      <MetricsSection />
    </section>
  );
};

export default About;
