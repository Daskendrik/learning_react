import { useEffect, useState } from 'react';

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <div className="card">
      <h4>Тут будет Fetch</h4>
      {data && <p>{data.title}</p>}
    </div>
  );
};

export default Fetch;
