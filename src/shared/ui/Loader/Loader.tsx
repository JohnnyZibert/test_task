import { Spin } from 'antd';

import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Spin size='large' />
    </div>
  );
};
