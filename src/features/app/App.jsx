/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from '../card/Card.jsx';
import './App.scss';

function App() {
  const statistic = [{ value: 9, activ: 543 }, { value: 6, activ: 5344 }, { value: 8, activ: 3256 }, { value: 1, activ: 3331 }, { value: 3, activ: 786 }, { value: 7, activ: 8653 }, { value: 5, activ: 430 }, { value: 2, activ: 888 }, { value: 6, activ: 1234 }, { value: 4, activ: 420 }, { value: 9, activ: 765 }, { value: 8, activ: 228 }];

  return (
    <div className="App">
      <header className='header'>
        <div className="header__navbar">
          <a href="#" className='link'>Мероприятия</a>
          <a href="#" className='link'>Выход</a>
        </div>
      </header>
      <div className="sidebar">
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
      <div className='body'>
        <div className='card__list'>
          {statistic.map((el, i) => <Card key={i} statistic={el} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
