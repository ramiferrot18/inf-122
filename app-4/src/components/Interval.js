import React from 'react';

const Interval = (callback, delay) => {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = window.setInterval(tick, delay);
      return () => window.clearInterval(id);
    }
  }, [delay]);
};

export default Interval;
