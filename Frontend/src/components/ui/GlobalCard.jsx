import React from 'react';
import { cn } from '../../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * GlobalCard is a flexible card component that unifies all card usages in the app.
 * Supports: title, icon, actions, expandable, headerAction, span/grid, and custom content sections.
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
  ...props
}) => {
  const [expanded, setExpanded] = React.useState(false);
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

  return (
    <div
      className={cn(
        `rounded-xl border-border bg-[#252539] text-text-light shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 p-5 ${spanClasses[span]} ${className}`,
      )}
      {...props}
    >
      {(title || icon || actions.length > 0 || expandable || headerAction) && (
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-divider-color">
          <div className="flex items-center gap-2 text-lg font-semibold text-card-foreground">
            {icon && <FontAwesomeIcon icon={icon} className="text-primary-accent" />}
            {title && <span>{title}</span>}
          </div>
          <div className="flex gap-2">
            {actions.map((action, idx) => (
              <button
                key={idx}
                className="bg-transparent border-none text-text-muted cursor-pointer w-6 h-6 flex items-center justify-center rounded hover:bg-white hover:bg-opacity-10 hover:text-text-light transition-all duration-200"
                onClick={action.onClick}
              >
                <FontAwesomeIcon icon={action.icon} />
              </button>
            ))}
            {headerAction && (
              <i
                className="fas fa-ellipsis-h text-primary cursor-pointer hover:text-primary/80"
                title="More options"
                onClick={onHeaderAction}
              ></i>
            )}
            {expandable && (
              <button
                className="bg-transparent border-none text-text-muted cursor-pointer w-6 h-6 flex items-center justify-center rounded hover:bg-white hover:bg-opacity-10 hover:text-text-light transition-all duration-200"
                onClick={handleExpand}
              >
                <FontAwesomeIcon icon={expanded ? 'compress' : 'expand'} />
              </button>
            )}
          </div>
        </div>
      )}
      {cardHeader && <div className="flex flex-col space-y-1.5 p-6">{cardHeader}</div>}
      {cardDescription && <p className="text-sm text-muted-foreground">{cardDescription}</p>}
      <div className="p-6">{children}</div>
      {cardFooter && <div className="flex items-center p-6 pt-0">{cardFooter}</div>}
      {expanded && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-40" onClick={handleExpand}></div>
      )}
    </div>
  );
};

export default GlobalCard;
