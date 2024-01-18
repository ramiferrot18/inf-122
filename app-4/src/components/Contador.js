import React from 'react';
import Interval from './Interval';

import '../style/Contador.css';

function Contador() {
  const [count, setCount] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(10);
  const id = React.useRef(null);

  const clear = () => window.clearInterval(id.current);

  Interval(() => {
    setTimeLeft((time) => time - 1);
  }, 1000);

  React.useEffect(() => {
    if (timeLeft === 0) {
      clear();
    }
  }, [timeLeft]);

  return (
    <div className="Contador">
      <h1>{count}</h1>
      <h3>Time left: {timeLeft} seconds</h3>
      {timeLeft === 0 ? null : (
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      )}
    </div>
  );
}
export default Contador;