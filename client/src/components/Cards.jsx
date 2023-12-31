import Card from './Card';
import styles from '../styles/Card.module.css';

export default function Cards(props) {
  return (
    <div className={styles.cardsGrid}>
      {props.characters?.map(e => (
        // el ? es para q no rompa con el map, chequea q haya algo en characters
        // y luego ejecuta el map
        <Card
          id={e.id}
          key={e.id}
          name={e.name}
          status={e.status}
          species={e.species}
          gender={e.gender}
          origin={e.origin.name}
          image={e.image}
          onClose={() => props.onClose(e.id)}
        ></Card>
      ))}
    </div>
  );
}
