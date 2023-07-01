import React from 'react';

const Dropdown = ({options, id, handleDropdownChange}) => {
    const renderOptions = () => {
        if(!options || !options.length) return
        return options.map(item => {
           return <option className='dropdown-item' value={item.name} key={item.name}>{item.name}</option>
        });
    }
    return(<select name={id} id={id} className='dropdown' onChange={handleDropdownChange}>
    {renderOptions()}
  </select>)
}

export default Dropdown;