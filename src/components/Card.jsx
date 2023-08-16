import styles from '../styles/Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({
  // destructuring
  image,
  id,
  name,
  status,
  species,
  gender,
  origin,
  onClose,
}) {
  return (
    <div className={`${styles.card} ${styles.grow}`}>
      <img src={image} alt='' />
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin.name}</h2>
      <div className={styles.closeDiv}>
        <button className={styles.close} onClick={() => onClose(id)}>
          Close
        </button>
      </div>
    </div>
  );
}
