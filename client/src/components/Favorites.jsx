import React from 'react';
import { Card } from './Card';
import { connect } from 'react-redux';

const Favorites = props => {
  console.log(props.myFavorites);
  //   return (
  //     <div>
  //       {props.myFavorites.map(e => (
  //         <Card>
  //           id={e.id}
  //           key={e.id}
  //           name={e.name}
  //           status={e.status}
  //           species={e.species}
  //           gender={e.gender}
  //           origin={e.origin.name}
  //           image={e.image}
  //         </Card>
  //       ))}
  //     </div>
  //   );
};

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

connect(mapStateToProps, null)(Favorites);

export default Favorites;
