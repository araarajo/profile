import { useRef, useEffect, useCallback } from 'react';

const useVisible = () => {
  const element = useRef<HTMLDivElement>(null);

  const onScroll = useCallback((entries, observer) => {
    const { current } = element;
    entries.forEach((entry: { isIntersecting: any; target: any }) => {
      if (current && entry.isIntersecting) {
        // observer.unobserve(entry.target);
        console.log('show');
      } else {
        console.log('hide');
      }
    });
  }, []);

  useEffect(() => {
    if (element.current) {
      const observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useVisible;
