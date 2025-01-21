import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ imageSrc, altText, bannerText }) => {
  return (
    <div className={styles.bannerContainer}>
      
    <img src='/banner.webp' alt={altText} className={styles.bannerImage} />

    <div className={styles.textContainer}>
      <img className={styles.logoImages} src="https://wp.technologyreview.com/wp-content/uploads/custom-story/1085094/images/mit-logo-horizontal.svg" alt="MIT Logo" />
      <h1 className={styles.bannerText}>10 Breakthrough Technologies 2024</h1>
    
      <div className={styles.bannerDescription}>
      <hr/>
      <br/>
        Every year, we look for promising technologies poised to have a real impact on the world. Here are the advances that we think matter most right now.
      </div>
    </div>
    
  </div>
  
  );
};

export default Banner;
