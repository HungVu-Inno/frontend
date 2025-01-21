import React from 'react';
import styles from './Footer.module.css';

import FooterColumn from './footerColumn/FooterColumn';
import Logo from './logo/Logo';
import { footerData } from '../../../mock-data';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <Logo src="/mit-logo-white.svg" alt="Logo" />
      </div>

      <div className={styles.rightContainer}>
        {footerData.map((column, index) => (
          <FooterColumn key={index} title={column.title} links={column.links} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
