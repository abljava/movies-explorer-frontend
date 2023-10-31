import { useState, useEffect } from 'react';

const useResize = () => {
  const [windowLarge, setWindowLarge] = useState(window.innerWidth > 1280);
  const [windowMedium, setWindowMedium] = useState(window.innerWidth <= 1279 && window.innerWidth > 929);
  const [windowSmall, setWindowSmall] = useState(window.innerWidth <= 929 && window.innerWidth > 629);
  const [windowXsmall, setWindowXsmall] = useState(window.innerWidth <= 629);

  useEffect(() => {
    const handleResize = () => {
      setWindowLarge(window.innerWidth > 1280);
      setWindowMedium(window.innerWidth <= 1279 && window.innerWidth > 929)
      setWindowSmall(window.innerWidth <= 929 && window.innerWidth > 629)
      setWindowXsmall(window.innerWidth <= 629)
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {windowLarge, windowMedium, windowSmall, windowXsmall};
};

export default useResize;


  //брейкпоинты для отрисовки разного количества карточек
  // const windowLarge = window.innerWidth > 1280;
  // const windowMedium = window.innerWidth <= 1279 && window.innerWidth > 929;
  // const windowSmall = window.innerWidth <= 929 && window.innerWidth > 629;
  // const windowXsmall = window.innerWidth <= 629;
