import { useState, useEffect, useRef } from 'react';
import styles from './SceneWrapper.module.css';
import CounterContainer from '../../interactive-components/counter-container/CounterContainer';
import useIsMobile from '../../../hooks/useIsMobile';
import BackToTop from '../../interactive-components/back-to-top/BackToTop';
import Button from '../../interactive-components/button/Button';

const SceneWrapper = ({ data }) => {
  const imageRefs = useRef([]);
  const isMobile = useIsMobile();
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [showBanner, setShowBanner] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target);
            setActiveIndex(index);
            setShowBanner(index === 2);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
    );

    imageRefs.current.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  const renderInfoContainer = () => (
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>{data[activeIndex]?.title}</h2>
      <p className={styles.description}>{data[activeIndex]?.description}</p>
     <div  style={{
      display:'flex',
      justifyContent:'center',
      marginTop: '1rem', 
  }}>
     <Button
      label="Why it matters"
      border="2px solid black"
      backgroundColor="#000000"
      labelColor="white"
      postfix="→"
      onClick={() => alert("Button clicked!")}
    />
     </div>
    </div>
  );

  return (
    <div>
        {!isMobile && (
          <div className={styles.counter}>
            <CounterContainer activeIndex={activeIndex} />
          </div>
         
        )}
      <div className={styles.contentContainer}>
      

        {(!isMobile || showBanner) && renderInfoContainer()}

        <div className={styles.imageContainer}>
          {data.map((item, index) => (
            <div key={index}>
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={item.image}
                alt={item.title}
                className={styles.image}
              />
              {isMobile && index === activeIndex && renderInfoContainer()}
            </div>
            
          ))}
          {!isMobile&& <BackToTop />}
        </div>
      </div>
    </div>
  );
};

export default SceneWrapper;
