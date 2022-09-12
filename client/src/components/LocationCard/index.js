import React from "react";
import { Link } from "react-router-dom";

function LocationCard(location) {
    const {
      image,
      name,
      _id,
      description,
    } = location;
  
    return (
      <div className="card px-1 py-1">
        <Link to={`/locations/${_id}`}>
        <div>
        <h2>{name}</h2>
        </div>
          <img
            alt={name}
            src={`/images/${image}`}
          />
        </Link>
        <div>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default LocationCard;
  