import { memo } from 'react';


export const Loading = memo(() => <div  >Loading...</div>);
Loading.displayName = 'Loading';

export const InlineLoading = memo(() => (
    <div  >Loading...</div>
));
InlineLoading.displayName = 'InlineLoading';
