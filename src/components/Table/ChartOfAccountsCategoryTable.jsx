import React from 'react';
import PropTypes from 'prop-types';

export default function ChartOfAccountsCategoryTable({ title, accounts }) {
  return (
    <table className="w-full border">
      <thead className="bg-slate-100 border text-left">
        <tr>
          <th className="px-5 py-2">{title}</th>
        </tr>
      </thead>
      <tbody>
        {accounts.options.map((account) => (
          <tr key={account.id} className="border hover:bg-blue-100">
            <td className="px-5 py-3">{account.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ChartOfAccountsCategoryTable.propTypes = {
  title: PropTypes.string.isRequired,
  accounts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
  }).isRequired,
};
