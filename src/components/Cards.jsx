import Card from './Card';
import style from './Card.css';

export default function Cards(props) {
  return (
    <div className='cardsGrid'>
      {props.characters.map(e => (
        <Card
          key={e.id}
          name={e.name}
          status={e.status}
          species={e.species}
          gender={e.gender}
          origin={e.origin.name}
          image={e.image}
        ></Card>
      ))}
    </div>
  );
}
