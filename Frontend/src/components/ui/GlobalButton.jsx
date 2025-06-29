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
  faSave,
  faLock,
  faTimes,
  faInfoCircle,
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
  'save': faSave,
  'lock': faLock,
  'times': faTimes,
  'info-circle': faInfoCircle,
};

const GlobalButton = ({ title = 'Button', icon, width, onClick, disabled, spin }) => {
  return (
    <button
      className={`
        relative overflow-hidden
        backdrop-blur-md bg-white/10 border border-white/20
        text-white py-2 px-4 rounded-lg
        flex items-center gap-2
        transition-all duration-300 ease-in-out
        hover:bg-white/20 hover:border-white/30 hover:shadow-lg
        hover:shadow-blue-500/25 hover:-translate-y-0.5
        active:translate-y-0 active:shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-transparent before:via-white/5 before:to-transparent
        before:translate-x-[-100%] hover:before:translate-x-[100%]
        before:transition-transform before:duration-700
        ${width ? ` w-[${width}]` : ''}
      `}
      style={width ? { width } : {}}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconMap[icon] && (
        <FontAwesomeIcon 
          icon={iconMap[icon]} 
          spin={spin && icon === 'spinner'}
          className="relative z-10" 
        />
      )}
      <span className="relative z-10 font-medium">{title}</span>
    </button>
  );
};

export default GlobalButton;
