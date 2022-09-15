import './Header.scss';

function Header({ active, open, hideMenu }) {
  return (
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
  );
}

export default Header;
