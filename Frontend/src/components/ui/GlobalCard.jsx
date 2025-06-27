import React from 'react';
import { cn } from '../../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * GlobalCard is a flexible card component that unifies all card usages in the app.
 * Supports: title, icon, actions, expandable, headerAction, span/grid, and custom content sections.
 * 
 * @param {string} mode - 'light' | 'dark' - Sets the color scheme of the card
 */
const GlobalCard = ({
  children,
  title,
  icon,
  actions = [],
  expandable = false,
  headerAction,
  onHeaderAction,
  span = 1,
  className = '',
  cardHeader,
  cardFooter,
  cardDescription,
  mode,
  ...props
}) => {
  const [expanded, setExpanded] = React.useState(false);
  // Use the global variable for initial mode
  const [effectiveMode, setEffectiveMode] = React.useState(() => (typeof mode === 'string' ? mode : defaultGlobalLightMode));
  const handleExpand = () => setExpanded(!expanded);

  // Grid span classes for dashboard layouts
  const spanClasses = {
    1: '',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    6: 'col-span-6',
    8: 'col-span-8',
    10: 'col-span-10',
    12: 'col-span-12',
  };

  // Theme configurations
  const theme = {
    light: {
      card: 'bg-gray-50 text-gray-700 border-gray-300 hover:shadow-md hover:border-indigo-200',
      header: 'text-gray-800 border-gray-200',
      icon: 'text-blue-500',
      actionButton: 'text-gray-500 hover:bg-gray-100 hover:text-gray-700',
      description: 'text-gray-600',
      expandOverlay: 'bg-black bg-opacity-70',
    },
    dark: {
      card: 'bg-[#252539] text-text-light border-border hover:border-primary/30',
      header: 'text-card-foreground border-divider-color',
      icon: 'text-primary-accent',
      actionButton: 'text-text-muted hover:bg-white hover:bg-opacity-10 hover:text-text-light',
      description: 'text-muted-foreground',
      expandOverlay: 'bg-black bg-opacity-70',
    }
  };

  // React to mode changes and body class changes instantly
  React.useEffect(() => {
    if (typeof mode === 'string') {
      setEffectiveMode(mode);
    } else {
      const updateMode = () => {
        const newMode = document.body.classList.contains('dark') ? 'dark' : 'light';
        setEffectiveMode(newMode);
        defaultGlobalLightMode = newMode;
      };
      updateMode();
      const observer = new MutationObserver(updateMode);
      observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
      return () => observer.disconnect();
    }
  }, [mode]);

  const currentTheme = theme[effectiveMode] || theme.light;

  return (
    <div
      className={cn(
        `rounded-xl border-border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 p-5 ${spanClasses[span]} ${currentTheme.card} ${className}`,
      )}
      {...props}
    >
      {(title || icon || actions.length > 0 || expandable || headerAction) && (
        <div className={`flex justify-between items-center mb-5 pb-3 border-b ${currentTheme.header}`}>
          <div className={`flex items-center gap-2 text-lg font-semibold`}>
            {icon && <FontAwesomeIcon icon={icon} className={currentTheme.icon} />}
            {title && <span>{title}</span>}
          </div>
          <div className="flex gap-2">
            {actions.map((action, idx) => (
              <button
                key={idx}
                className={`bg-transparent border-none cursor-pointer w-6 h-6 flex items-center justify-center rounded transition-all duration-200 ${currentTheme.actionButton}`}
                onClick={action.onClick}
              >
                <FontAwesomeIcon icon={action.icon} />
              </button>
            ))}
            {headerAction && (
              <i
                className={`fas fa-ellipsis-h cursor-pointer hover:opacity-80 ${
                  effectiveMode === 'light' ? 'text-blue-500' : 'text-primary'
                }`}
                title="More options"
                onClick={onHeaderAction}
              ></i>
            )}
            {expandable && (
              <button
                className={`bg-transparent border-none cursor-pointer w-6 h-6 flex items-center justify-center rounded transition-all duration-200 ${currentTheme.actionButton}`}
                onClick={handleExpand}
              >
                <FontAwesomeIcon icon={expanded ? 'compress' : 'expand'} />
              </button>
            )}
          </div>
        </div>
      )}
      {cardHeader && <div className="flex flex-col space-y-1.5 p-6">{cardHeader}</div>}
      {cardDescription && <p className={`text-sm ${currentTheme.description}`}>{cardDescription}</p>}
      <div className="p-6">{children}</div>
      {cardFooter && <div className="flex items-center p-6 pt-0">{cardFooter}</div>}
      {expanded && (
        <div className={`fixed top-0 left-0 right-0 bottom-0 z-40 ${currentTheme.expandOverlay}`} onClick={handleExpand}></div>
      )}
    </div>
  );
};

// Global variable to hold the current mode
export let defaultGlobalLightMode = (typeof window !== 'undefined' && document.body && document.body.classList.contains('dark')) ? 'dark' : 'light';

export default GlobalCard;