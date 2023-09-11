import React from 'react';
const ComponentState = () => {
  const [count, setCount] = React.useState(0);
  function btnSetCount() {
    setCount(count + 1);
  }
  return (
    <div className="card">
      <h4>
        Это компонент с состоянием, которое будет меняться по кнопке. Счет{' '}
        {count}
      </h4>
      <button onClick={btnSetCount}>+1</button>
    </div>
  );
};

export default ComponentState;
