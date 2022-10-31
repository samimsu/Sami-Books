import React from 'react';
import PropTypes from 'prop-types';

export default function GeneralWidget({ title, content }) {
  return (
    <div className="border border-slate-300 rounded p-3 w-48 space-y-3 shadow">
      <p className="text-xs uppercase text-slate-500">{title}</p>
      <p className="font-bold text-lg text-right">{content}</p>
    </div>
  );
}

GeneralWidget.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

GeneralWidget.defaultProps = {
  title: '',
  content: '',
};
