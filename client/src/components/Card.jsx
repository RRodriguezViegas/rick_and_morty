import styles from '../styles/Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function Card({
  // destructuring
  image,
  id,
  name,
  status,
  species,
  gender,
  origin,
  onClose,
  myFavorites,
  addFavorites,
  removeFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach(fav => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      // console.log(typeof removeFav);
      removeFavorites(id);
    } else {
      setIsFav(true);
      addFavorites({ name, status, species, image, id });
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

function mapDispatchToProps(dispatch) {
  return {
    addFavorites: character => {
      dispatch(addFav(character));
    },
    removeFavorites: id => {
      dispatch(removeFav(id));
    },
  };
}

const mapStateToProps = state => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
