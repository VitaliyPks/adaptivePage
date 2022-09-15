import './Sidebar.scss';

function Sidebar({ active }) {
  return (
    <div className={active ? 'sidebar _active' : 'sidebar'}>
      <ul className='sidebar__list'>
        <li className='list__item'>
          <img src='dash.svg' className='test'></img>
          <a href="#" className='link'>Дашборд</a>
        </li>
        <li className='list__item'>
          <img src='activ.svg'></img>
          <a href="#" className='link'>Биржа активности</a>
        </li>
        <li className='list__item'>
          <img src='blog.svg'></img>
          <a href="#" className='link'>Биржа блогеров</a>
        </li>
        <li className='list__item'>
          <img src='piar.svg'></img>
          <a href="#" className='link'>Взаимопиар</a>
        </li>
        <li className='list__item'>
          <img src='mystructure.svg'></img>
          <a href="#" className='link'>Моя структура</a>
        </li>
        <li className='list__item'>
          <img src='store.svg'></img>
          <a href="#" className='link'>Магазин</a>
        </li>
        <li className='list__item'>
          <img src='rocket.svg'></img>
          <a href="#" className='link'>Марафон</a>
        </li>
        <li className='list__item'>
          <img src='lending.svg'></img>
          <a href="#" className='link'>Лендинги</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
