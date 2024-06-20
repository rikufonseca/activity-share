import PropTypes from 'prop-types';
export default function Card(props){
  Card.propTypes = {
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // Add other prop types here
  };
  return (
      <div className="card">
        <div className="container--image">
          <p className="box--top-left font">SOLD OUT</p>
          <img src={props.img} height="335px" width="200px" alt={props.title}/>
        </div>
        <div className="container--text">
          <div className="flex">
            <img src="././public/images/star-icon.png" height="15px" width="15px" className="margin-0" alt="star icon"/>
            <p className="rating margin-0"> {props.rating} ({props.reviewCount}) . {props.country} </p>
          </div>
          <p className="margin-5"> {props.title} </p>
          <p className="margin-5"> <span className="bold">From $136 </span>/ person </p>
        </div>
      </div>
  )
}
