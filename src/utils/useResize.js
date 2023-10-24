import { useState, useEffect } from 'react';

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
  };
};

// const window = useResize();


// {window.width >= 1280 &&
//   movies.map((item) => {
//     return <MoviesCard movie={item} key={item._id} />;
//   })}

export default useResize;