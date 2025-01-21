import React from 'react';
import styles from './BannerAdvertise.module.css';

const BannerAdvertise = ({ imageSrc, altText, title, description, buttonText, buttonLink }) => {
  return (
    <div className={styles.bannerContainer}>

      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={altText} className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a href={buttonLink} className={styles.button}>
          {buttonText}
        </a>
      </div>
      
    </div>
  );
};

export default BannerAdvertise;
