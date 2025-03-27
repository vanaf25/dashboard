export const getParentPath = (pathname: string) => {
    const withoutQuery = pathname.split('?')[0];
    const segments = withoutQuery.split('/').filter(Boolean);
    if (segments.length > 0) {
        segments.pop();
    }
    return `/${segments.join('/')}`;
};