import Card from './Card';
import styles from '../styles/Card.module.css';

export default function Cards(props) {
  return (
    <div className={styles.cardsGrid}>
      {props.characters.map(e => (
        <Card
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
