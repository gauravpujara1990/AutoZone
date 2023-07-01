import React, { useState } from "react";
import {HEADING_MESSAGE, LOAD_MESSAGE, SHOW_ALL_TRIGGER} from '../constants';
import Resident from "./resident";

const ResidentList = ({residentList = [], error, selectedPlanet}) => {
    const [isShowAll, setShowAll] = useState(false);

    const renderResidentList = () => {
        const resultSet = !isShowAll ? residentList.slice(0,10) : residentList;
        return  (!!resultSet.length && <div className="resident-list">
        {!!resultSet.length && resultSet.map(resident => <Resident key={resident} residenturl={resident} />)}
    </div>)
    }

    return (
        <>
        {selectedPlanet?.name ? <p className='label'>{residentList.length} {HEADING_MESSAGE} {selectedPlanet.name}</p>: <p className='label'>{LOAD_MESSAGE}</p>}
       {renderResidentList()}
        {residentList.length > SHOW_ALL_TRIGGER &&<div className="action-container">
            <input type='button' value={isShowAll ? 'Show Less' : 'Show All'} className="show-all-btn" onClick={() => setShowAll(!isShowAll)}/>
        </div>}
        </>
    )
}

export default ResidentList;