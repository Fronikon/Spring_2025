import React from 'react';
import styles from 'pages/About/About.module.css';

const About: React.FC = () => {
  return (
    <main role={'AboutPage'} className={styles.container}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>About us</h2>
          <p className={styles.description}>
            Our application is a photo aggregator that can provide access to more than a million
            photos of various topics and contents.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
