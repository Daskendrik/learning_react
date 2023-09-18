import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <h3>Menu</h3>
      <NavLink to="." end>
        Начало
      </NavLink>
      <NavLink to="test">Тест</NavLink>
      <NavLink to="some">Что то</NavLink>
      <NavLink to="courses">Курсы</NavLink>
    </>
  );
};

export default Menu;
