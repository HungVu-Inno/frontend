import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';

const Logo = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.logo} />;
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Logo;
