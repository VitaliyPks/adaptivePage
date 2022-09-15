import './Form.scss';

function Form() {
  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
      <input className='input__text' type="text" name="" id="" />
      <input className='input__btn' type="submit" value="отправить" />
    </form>
  );
}

export default Form;
