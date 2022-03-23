import React from 'react';

import styles from './ErrorPage.module.scss';

const NotFound = () => {
  return <h1 className={styles['error-header']}>404 Page Not Found</h1>;
};

export default NotFound;
