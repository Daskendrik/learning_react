import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <h3>Menu</h3>
      <Link to="/">Начало</Link>
      <Link to="/test">Тест</Link>
      <Link to="/some">Что то</Link>
    </>
  );
};

export default Menu;
