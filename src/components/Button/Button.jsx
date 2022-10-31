import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ text, onClick }) {
  return (
    <button
      type="button"
      className="font-bold text-blue-700 border border-blue-700 rounded-full px-5 py-2 hover:bg-blue-100"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
