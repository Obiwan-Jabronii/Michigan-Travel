import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_REGIONS } from '../../utils/queries';

function RegionMenu({ setRegion }) {
    const { data: regionData } = useQuery(QUERY_REGIONS);
    const regions = regionData?.regions || [];

    return (
        <div className='menu'>
            <h2>Choose a Region:</h2>
            {regions.map((item) => (
                <button
                    key={item._id}
                    onClick={() => {
                        setRegion(item._id);
                    }}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}

export default RegionMenu