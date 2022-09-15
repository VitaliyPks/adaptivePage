import { useEffect, useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext.jsx';
import Form from '../components/form/Form.jsx';
import Modal from '../components/Modal/Modal.jsx';
import './App.scss';
import Header from '../components/Header/Header.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Body from '../components/Body/Body.jsx';

function App() {
  const [active, setActive] = useState(false);
  const { modal, open, close } = useContext(ModalContext);

  useEffect(() => {
    modal
      ? document.body.classList.add('_lock')
      : document.body.classList.remove('_lock');
  }, [modal]);

  function hideMenu() {
    setActive((activ) => !activ);
    document.body.classList.toggle('_lock');
  }

  return (
    <div className='App'>
      {modal && <Modal onClose={close}>
        <Form />
      </Modal>}
      <Header active={active} open={open} hideMenu={hideMenu} />
      <Sidebar active={active} />
      <Body />
    </div >
  );
}

export default App;
