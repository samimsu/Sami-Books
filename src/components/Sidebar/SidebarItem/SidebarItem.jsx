import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function SidebarItem({ linkTo, icon, text }) {
  const activeStyle = 'font-bold text-blue-700 pointer-events-none';
  return (
    <li className="hover:text-gray-800">
      <NavLink
        to={linkTo}
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex flex-row space-x-3 items-center">
          {icon}
          <span>{text}</span>
        </div>
      </NavLink>
    </li>
  );
}

SidebarItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};
