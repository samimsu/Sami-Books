import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';

export default function Table({
  transactionData,
  setTransactions,
  editTransaction,
}) {
  const bodyRowStyle = 'border hover:bg-blue-100 group';
  const headRowDataStyle = 'px-5 py-2';
  const bodyRowDataStyle = 'px-5 py-3';

  const handleDelete = (id) => {
    setTransactions(
      transactionData.filter((transaction) => transaction.id !== id),
    );
  };

  return (
    <div className="overflow-y-auto">
      <table className="w-full border">
        <thead className="bg-slate-100 border text-left">
          <tr>
            <th className={headRowDataStyle}>Date</th>
            <th className="w-2/5">Description</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {(transactionData.length &&
            transactionData
              .sort(
                (a, b) =>
                  new Date(a.date).getTime() - new Date(b.date).getTime(),
              )
              .map((transaction) => (
                <tr key={transaction.id} className={bodyRowStyle}>
                  <td className={bodyRowDataStyle}>
                    {format(new Date(transaction.date), 'MMM d, y')}
                  </td>
                  {/* <td className={bodyRowDataStyle}>{transaction.date}</td> */}
                  <td>{transaction.description}</td>
                  <td>{transaction.debit}</td>
                  <td>{transaction.credit}</td>
                  <td>{transaction.amount}</td>
                  <td className="absolute right-7 pt-2 hidden group-hover:block">
                    <div className="space-x-2">
                      <button
                        type="button"
                        onClick={() => editTransaction(transaction)}
                      >
                        <Icon
                          icon="fluent:edit-16-filled"
                          color="blue"
                          width="22"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(transaction.id)}
                      >
                        <Icon
                          icon="fluent:delete-12-regular"
                          color="red"
                          width="22"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))) || (
            <tr>
              <td colSpan="5" className="text-center italic">
                No transactions yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  transactionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string,
      description: PropTypes.string,
      account: PropTypes.string,
      category: PropTypes.string,
      amount: PropTypes.number,
    }),
  ),
  setTransactions: PropTypes.func.isRequired,
  editTransaction: PropTypes.func.isRequired,
};

Table.defaultProps = {
  transactionData: [],
};
