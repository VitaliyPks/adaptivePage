/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useContext, useState } from 'react';
import { ModalContext } from '../../context/ModalContext.jsx';
import Card from '../card/Card.jsx';
import Modal from '../Modal/Modal.jsx';
import './App.scss';

const statistic = [{ value: 9, activ: 543 }, { value: 6, activ: 5344 }, { value: 8, activ: 3256 }, { value: 1, activ: 3331 }, { value: 3, activ: 786 }, { value: 7, activ: 8653 }, { value: 5, activ: 430 }, { value: 2, activ: 888 }, { value: 6, activ: 1234 }, { value: 4, activ: 420 }, { value: 9, activ: 765 }, { value: 8, activ: 228 }];

function App() {
  const [active, setActive] = useState(false);
  const { modal, open, close } = useContext(ModalContext);
  // const sidebar = document.querySelector('.sidebar');
  // const burger = document.querySelector('.burger');

  useEffect(() => {
    modal
      ? document.body.classList.add('_lock')
      : document.body.classList.remove('_lock');
  }, [modal]);

  function hideMenu() {
    // console.log(sidebar, burger);
    // sidebar.classList.toggle('_active');
    // burger.classList.toggle('_active');
    setActive((activ) => !activ);
    document.body.classList.toggle('_lock');
  }

  return (
    <div className='App'>
      {modal && <Modal onClose={close}>
        <form className='form' onSubmit={(e) => e.preventDefault()}>
          <input className='input__text' type="text" name="" id="" />
          <input className='input__btn' type="submit" value="отправить" />
        </form>
      </Modal>}
      <header className='header'>
        <div className="header__container">
          <div className="header__navbar">
            <a href="#" className='link'>Мероприятия</a>
            <input className='input__btn' type="button" value="жмяк" onClick={open} />
            <a href="#" className='link'>Выход</a>
            <div className={active ? 'burger _active' : 'burger'} onClick={hideMenu}>
              <span></span>
            </div>
          </div>
        </div>
      </header>
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
      <div className='body'>
        <div className='card__list'>
          {statistic.map((el, i) => <Card key={i} statistic={el} />)}
        </div>
      </div>
    </div >
  );
}

export default App;
