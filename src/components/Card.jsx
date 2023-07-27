import style from './Card.css';

export default function Card(props) {
  return (
    <div className='card grow'>
      <img src={props.image} alt='' />
      <h2 className='name'>{props.name}</h2>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin.name}</h2>
      <div className='closeDiv'>
        <button className='close' onClick={props.onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
