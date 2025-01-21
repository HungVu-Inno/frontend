import React from 'react';
import styles from './CounterContainer.module.css'; // Update the path to where your CSS is located

const CounterContainer = ({ activeIndex }) => {
  return (
    <div className={styles.counterContainer}>
      <hr/>
      {Array.from({ length: 8 }, (_, index) => (
        <div
          key={index}
          className={`${styles.counterItem} ${
            index === activeIndex ? styles.active : ''
          }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default CounterContainer;
