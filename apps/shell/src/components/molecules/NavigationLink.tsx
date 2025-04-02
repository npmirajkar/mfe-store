import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationLinkProps {
  to: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  to,
  icon,
  children
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-md transition-colors
        ${isActive 
          ? 'bg-blue-50 text-blue-700' 
          : 'text-gray-700 hover:bg-gray-50'
        }
      `}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{children}</span>
    </Link>
  );
};