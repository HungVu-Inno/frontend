import React, { useEffect, useState } from 'react';
import styles from './TemplateModal.module.css';
import Button from '../button/Button';

const TemplateModal = ({ content, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasShownModal = localStorage.getItem('hasShownModal');
    
    if (!hasShownModal) {
      // Show modal and set localStorage to track that it's been shown
      setIsVisible(true);
      localStorage.setItem('hasShownModal', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className={styles.modalBackdrop} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeIcon} onClick={handleClose}>✖</button>
        <div className={styles.modalBackground}>
          <div className={styles.modalDescription}>
            {content}
          </div>
          <Button backgroundColor='red' labelColor='white' label='REGISTER NOW'/>
        </div>
      </div>
    </div>
  );
};

export default TemplateModal;
