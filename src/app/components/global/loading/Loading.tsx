import { memo } from 'react';

import styles from './Loading.module.scss';

export const Loading = memo(() => <div className={styles.loading} />);
Loading.displayName = 'Loading';

export const InlineLoading = memo(() => (
  <div data-testid="inline-loading" className={styles.inlineLoading} />
));
InlineLoading.displayName = 'InlineLoading';
