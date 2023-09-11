import React from 'react';
import ChildChangeParentState from './ChildChangeParentState';

const ParentStateChangeByChild = () => {
  const [color, setColor] = React.useState('lightblue');
  const btnSetColor = () => {
    if (color === 'red') {
      setColor('lightblue');
    } else {
      setColor('red');
    }
  };

  return (
    <div className="card">
      <span style={{ background: color }}>
        Тут мы меняем цвет кнопкой, дочерним компонентом
      </span>
      <br></br>
      <ChildChangeParentState onClick={btnSetColor} />
    </div>
  );
};

export default ParentStateChangeByChild;
