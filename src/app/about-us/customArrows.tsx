



// CustomPrevArrow.js
import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export function CustomPrevArrow ({ onClick, id, additionalClasses }: {onClick?: ()=>void, id?: string, additionalClasses?: string}) {
  return(
    <div id={id} className={`custom-arrow custom-prev-arrow ${additionalClasses}`} onClick={onClick}>
      {/* You can use an icon or text here */}
      <ChevronLeftIcon className='w-8 text-gray-black' />
    </div>
  )
};

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

;

// CustomNextArrow.js

export function CustomNextArrow({ onClick, id, additionalClasses }: {onClick?: ()=>void, id?: string, additionalClasses?: string}) {
  return (
    <div id={id} className={`custom-arrow custom-next-arrow ${additionalClasses}`} onClick={onClick}>
      {/* You can use an icon or text here */}
      <ChevronRightIcon className='w-8 text-gray-black' />
    </div>
  )
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};