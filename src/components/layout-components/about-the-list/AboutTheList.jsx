import styles from './AboutTheList.module.css';
import { mockDataAboutList } from '../../../mock-data';
const AboutTheList = () => {
    const { title, aboutTitle, description, credits } = mockDataAboutList;
  
    return (
      <div className={styles.container}>
        <div className={styles.aboutTitle}>{aboutTitle}</div>
        <div className={styles.breakthroughTitle}>{title}</div>
        <div className={styles.description}>{description}</div>
        <a href="#" className={styles.exploreArchives}>Explore the archives →</a>
  
        <div className={styles.credits}>
          <h3>Credits</h3>
  
          <h4>Editorial</h4>
          {credits.editorial.map((item, index) => (
            <p key={index} className={styles.creditItem}>{item}</p>
          ))}
  
          <h4>Art</h4>
          {credits.art.map((item, index) => (
            <p key={index} className={styles.creditItem}>{item}</p>
          ))}
  
          <h4>Technology</h4>
          {credits.technology.map((item, index) => (
            <p key={index} className={styles.creditItem}>{item}</p>
          ))}
        </div>
      </div>
    );
  };
  
  export default AboutTheList;