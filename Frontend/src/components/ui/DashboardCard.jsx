import React from 'react';
import { Link } from 'react-router-dom';

const DashboardCard = ({ 
  title, 
  children, 
  actionLink
}) => {
  return (
    <div className="dashboard-box">
      <h2 className="box-title flex items-center justify-between">
        <span>{title}</span>
        <span className="flex items-center gap-2">
          {actionLink && (
            <Link to={actionLink.href} className="action-link text-blue-600 hover:underline text-sm font-medium">
              {actionLink.text}
            </Link>
          )}
        </span>
      </h2>
      {children}
    </div>
  );
};

export default DashboardCard;