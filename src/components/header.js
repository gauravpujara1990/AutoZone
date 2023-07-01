import React, { useEffect, useState } from "react";
import { BASE_URL, PLANETS_URL } from "../constants";
import Dropdown from './dropdown';
import { get } from "../common/apiWrapper";

const Header = (props) => {
    const { setSelectedPlanet, setResidentList} = props;
    const [planets, setPlanets] = useState([]);
    useEffect(() => {
        const getPlanets = async () => {
            const resp = await get(`${BASE_URL}${PLANETS_URL}`);
            setPlanets(resp?.results);
            setSelectedPlanet(resp?.results[0])
            setResidentList(resp?.results[0].residents);
          };
          getPlanets();
    }, []);

    const handleDropdownChange = (e) => {
        const selectedPlanet = planets.find(planet => planet.name === e.target.value);
        setSelectedPlanet(selectedPlanet)
        if (selectedPlanet?.residents) {
            setResidentList(selectedPlanet.residents);
        }
    }

    return( <div className='header'>
    <p className='label p-r-1'>Please select a Planet</p>
    <Dropdown options={planets} handleDropdownChange={handleDropdownChange} />
    </div>)
}

export default Header;