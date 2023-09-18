import { React, useState } from 'react';

const FizzBuzz = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const show = () => {
    if (count === 0) {
      return count;
    }

    if (count % 5 === 0 && count % 7 === 0) {
      return 'FizzBuzz';
    }

    if (count % 5 === 0) {
      return 'Fizz';
    }

    if (count % 7 === 0) {
      return 'Buzz';
    }

    return count;
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{show()}</h1>
      <button onClick={decrement}>-</button>
      <br />
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default FizzBuzz;
