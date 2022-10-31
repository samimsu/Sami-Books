import React from 'react';
import PropTypes from 'prop-types';
import capitalize from '@utils/capitalize';

function Input({ register, label, type }) {
  const { name, ref, onChange, onBlur } = register(label);
  return (
    <>
      {label && <label htmlFor={name}>{capitalize(label)}</label>}
      <input
        className="border py-2 px-5 h-10"
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
      />
    </>
  );
}

Input.propTypes = {
  register: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
