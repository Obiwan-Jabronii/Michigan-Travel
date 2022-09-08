import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LOCATIONS } from '../../utils/queries';
import LocationCard from '../LocationCard';

function LocationList({ currentRegion }) {
    const { data } = useQuery(QUERY_LOCATIONS);

    const locations = data?.locations || [];

    function filterLocations() {
        if (!currentRegion) {
            return locations;
        }

        return locations.filter(
            (location) => location.region._id === currentRegion
        );
    }

    return (
        <div className='my-2'>
            <h2>Choose Your Destination!</h2>
            {locations.length ? (
                <div className='flex-row'>
                    {filterLocations().map((location) => (
                        <LocationCard
                        key={location._id}
                        _id={location._id}
                        name={location.name}
                        image={location.image}
                        description={location.description}
                        />
                    ))}
                </div>
            ) : (
                <h3>No Locations Have Been Added Yet!</h3>
            )}
        </div>
    );
}

export default LocationList;