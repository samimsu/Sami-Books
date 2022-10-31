import React from 'react';
import PropTypes from 'prop-types';
import capitalize from '@utils/capitalize';

export default function Select({
  id,
  register,
  label,
  options,
  categoryOptions,
}) {
  const { name, ref, onChange, onBlur } = register(label);
  return (
    <>
      {label && <label htmlFor={label}>{capitalize(label)}</label>}
      <div className="border" name={name}>
        <select
          id={id}
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          className="py-2 px-5 h-10 w-full border-r-8 border-r-transparent"
        >
          {categoryOptions &&
            categoryOptions.map((categoryOption) => (
              <optgroup
                key={categoryOption.id}
                label={categoryOption.name.toUpperCase()}
                className="text-blue-700 font-light text-sm"
              >
                {categoryOption.options &&
                  categoryOption.options.length &&
                  categoryOption.options.map((option) => (
                    <option key={option.id} className="text-black text-base">
                      {option.name}
                    </option>
                  ))}
              </optgroup>
            ))}
        </select>
      </div>
    </>
  );
}

Select.defaultProps = {
  label: '',
  options: [],
  categoryOptions: [],
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  categoryOptions: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
          }),
        ),
      }),
    }),
  ),
};
