import React from 'react';
import styles from 'pages/PageNotFound/PageNotFound.module.css';

const PageNotFound: React.FC = () => {
  return (
    <main role={'pageNotFound'} className={`container ${styles.container}`}>
      <div className={styles.pageNotFound}>
        <h2 className={styles.title}>404</h2>
        <p className={styles.description}>Page Not Found</p>
      </div>
    </main>
  );
};

export default PageNotFound;
