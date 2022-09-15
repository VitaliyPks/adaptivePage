import Card from '../card/Card.jsx';
import './Body.scss';

const statistic = [
  { value: 9, activ: 543 },
  { value: 6, activ: 5344 },
  { value: 8, activ: 3256 },
  { value: 1, activ: 3331 },
  { value: 3, activ: 786 },
  { value: 7, activ: 8653 },
  { value: 5, activ: 430 },
  { value: 2, activ: 888 },
  { value: 6, activ: 1234 },
  { value: 4, activ: 420 },
  { value: 9, activ: 765 },
  { value: 8, activ: 228 }];

function Body() {
  return (
    <div className='body'>
      <div className='card__list'>
        {statistic.map((el, i) => <Card key={i} statistic={el} />)}
      </div>
    </div>
  );
}

export default Body;
