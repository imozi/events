import { useEffect } from 'react';

export const useDocumentTitle = (title: string) => {
  const prefixTitle = '| OziHub';

  useEffect(() => {
    document.title = `${title} ${prefixTitle}`;

    return () => {
      document.title = prefixTitle;
    };
  }, [title]);
};
