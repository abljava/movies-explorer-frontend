import { useState, useEffect, useRef } from 'react';

const useResize = () => {
  const [windowLarge, setWindowLarge] = useState(window.innerWidth > 1280);
  const [windowMedium, setWindowMedium] = useState(
    window.innerWidth <= 1279 && window.innerWidth > 929
  );
  const [windowSmall, setWindowSmall] = useState(
    window.innerWidth <= 929 && window.innerWidth > 629
  );
  const [windowXsmall, setWindowXsmall] = useState(window.innerWidth <= 629);

  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(ref.current);

      ref.current = setTimeout(() => {
        setWindowLarge(window.innerWidth > 1280);
        setWindowMedium(window.innerWidth <= 1279 && window.innerWidth > 929);
        setWindowSmall(window.innerWidth <= 929 && window.innerWidth > 649);
        setWindowXsmall(window.innerWidth <= 649);
      }, 1);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { windowLarge, windowMedium, windowSmall, windowXsmall };
};

export default useResize;
