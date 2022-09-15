import './Card.scss';

const person = [
  { name: 'kris_andalova', foto: 'delovoe_foto_9.jpg' },
  { name: 'kris_andalova', foto: 'delovoe_foto_9.jpg' },
  { name: 'kris_andalova', foto: 'delovoe_foto_9.jpg' },
  { name: 'kris_andalova', foto: 'delovoe_foto_9.jpg' },
  { name: 'kris_andalova', foto: 'delovoe_foto_9.jpg' },
  { name: 'kris_andalova', foto: 'delovoe_foto_9.jpg' },
  { name: 'kris_andalova', foto: 'delovoe_foto_9.jpg' },
  { name: 'kris_andalova', foto: 'delovoe_foto_9.jpg' },
  { name: 'kris_andalova', foto: 'delovoe_foto_9.jpg' }];

function Card({ statistic }) {
  return (
    <div className="card__item">
      <div className="card__head">
        <div className="head__number">
          <div className="number__first"><p className='number'>{statistic.value || 1}</p></div>
          <div className="number__second"><p className='number' >{statistic.activ || 1}</p></div>
        </div>
        <div className="head__line"></div>
        <div className="head__text">
          <div className="text__first"><p className='text'>Уровень выплат</p></div>
          <div className="text__second"><p className='text'>Активных партнёров</p></div>
        </div>
      </div>
      <div className="card__body">
        {person.map((el, i) => <div className='card__person' key={i}>
          <img src={el.foto} alt="" />
          <a href="#">{el.name}</a>
        </div>)}
      </div>
    </div>
  );
}

export default Card;
