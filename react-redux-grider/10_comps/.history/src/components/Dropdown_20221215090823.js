import { useState } from 'react';
import { GoChevronRight, GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(!isOpen);
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer '
        onClick={handleClick}
      >
        {selection?.label || 'Select...'}.{isOpen && <GoChevronDown />}
        {!isOpen && <GoChevronRight />}
      </Panel>
      {isOpen && (
        <Panel className='absolute top-full '>{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;