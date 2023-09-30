import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const Favorites = ({ myFavorites }) => {
  return (
    <div>
      {myFavorites?.map(e => (
        <Card
          id={e.id}
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
};

const mapStateToProps = state => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
