import React, { useEffect, useState } from 'react';
import { get } from "../common/apiWrapper";

const Resident = ({residenturl}) => {
    const [residentDetails, setResidentDetails] = useState({});
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        let ignore = false;
        const getDetails = async () => {
            try {
                const details = await get(residenturl);
                setResidentDetails(details);
                setIsLoading(false)
             } catch(e) {
                setIsError(true);
                setIsLoading(false)
             }
        }
        if(!ignore)
        getDetails();
        return () => {
            ignore = true;
        }
    },[residenturl]);

    const getNameInitials = (name) => {
        const [firstName = '', lastName = ''] = name.indexOf('-') > -1 ? name.split('-') : name.split(' ');
        return`${firstName[0] || ''}${lastName[0] || ''}`;
    }

    const getDetailAttribute = (att, unit) => {
        return att && att !== 'unknown' ? `${att}${unit}` : 'Not Available'
    }

    if (isLoading) {
        return (
            <div className='resident'>Loading . . .</div>
        )
    }
    
    return (
        <div className='resident'>
            <div className='resident-initials'>
                {getNameInitials(residentDetails.name)}
            </div>
            <div className='resident-details'>
                <div className='bold'>{residentDetails.name}</div>
                <div className='resident-body'>
                    <div>{getDetailAttribute(residentDetails.height, 'cm')}</div>
                    <div>{getDetailAttribute(residentDetails.mass, 'lbs')}</div>
                </div>
            </div>
        </div>
    )
}

export default Resident;