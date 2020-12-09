import { useRef, useState, useEffect, useCallback, MutableRefObject } from 'react';

const useVisible = (): {
  visibility: boolean;
  ref: MutableRefObject<HTMLDivElement | null>;
} => {
  const element = useRef<HTMLDivElement>(null);
  const [visibility, setVisibility] = useState<boolean>(false);

  const onScroll = useCallback((entries, observer) => {
    const { current } = element;

    entries.forEach((entry: { isIntersecting: any; target: any }) => {
      if (current && entry.isIntersecting) {
        setVisibility(true);
        // observer.unobserve(entry.target);
      } else {
        setVisibility(false);
      }
    });
  }, []);

  useEffect(() => {
    if (element.current) {
      const observer = new IntersectionObserver(onScroll, { threshold: 0.1 });
      observer.observe(element.current);
    }
  }, [onScroll]);

  return {
    visibility,
    ref: element,
  };
};

export default useVisible;
