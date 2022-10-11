import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

function LocationCard(location) {
    const {
      image,
      name,
      _id,
      description,
    } = location;
  
    return (
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="card px-1 py-1">
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
      </motion.div>
    );
  }
  
  export default LocationCard;
  