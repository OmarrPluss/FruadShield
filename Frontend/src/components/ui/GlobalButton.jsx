import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePdf,
  faSpinner,
  faCalendarAlt,
  faFilter,
  faPlusCircle,
  faEdit,
  faPowerOff,
  faPlayCircle,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  'file-pdf': faFilePdf,
  'spinner': faSpinner,
  'calendar-alt': faCalendarAlt,
  'filter': faFilter,
  'plus-circle': faPlusCircle,
  'edit': faEdit,
  'power-off': faPowerOff,
  'play-circle': faPlayCircle,
  'trash-alt': faTrashAlt,
};

const GlobalButton = ({ title = 'Button', icon, width, onClick, disabled, spin }) => {
  return (
    <button
      className={`bg-white bg-opacity-5 border border-divider-color text-text-light py-2 px-3 rounded-md flex items-center gap-2 hover:bg-opacity-10 transition-all duration-300${width ? ` w-[${width}]` : ''}`}
      style={width ? { width } : {}}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconMap[icon] && (
        <FontAwesomeIcon icon={iconMap[icon]} spin={spin && icon === 'spinner'} />
      )}
      <span>{title}</span>
    </button>
  );
};

export default GlobalButton;
