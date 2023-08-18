import styles from '../styles/Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import { useState } from 'react';
import { connect } from 'react-redux';

export function Card({
  // destructuring
  image,
  id,
  name,
  status,
  species,
  gender,
  origin,
  onClose,
  addFav,
  removeFav,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      console.log(typeof removeFav);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ name, status, species, image, id });
    }
  };

  return (
    <div className={`${styles.card} ${styles.grow}`}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
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

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: character => {
      dispatch(addFav(character));
    },
    removeFav: id => {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
