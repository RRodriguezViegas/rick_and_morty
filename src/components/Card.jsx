import styles from '../styles/Card.module.css';

export default function Card(props) {
  return (
    <div className={`${styles.card} ${styles.grow}`}>
      <img src={props.image} alt='' />
      <h2 className={styles.name}>{props.name}</h2>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin.name}</h2>
      <div className={styles.closeDiv}>
        <button className={styles.close} onClick={props.onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
