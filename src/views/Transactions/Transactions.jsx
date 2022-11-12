import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Button from '@components/Button/Button';
import Table from '@components/Table/Table';
import Modal from '@components/Modal/Modal';
import NewTransactionForm from '@components/forms/NewTransactionForm';
import EditTransactionForm from '@components/forms/EditTransactionForm';

const TODAYS_DATE = format(new Date(), 'yyyy-MM-dd');

export default function Transactions({ transactions, setTransactions }) {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    date: TODAYS_DATE,
    description: '',
    debit: 'Cash on Hand',
    credit: 'Sales',
    amount: '',
  };

  const [currentTransaction, setCurrentTransaction] =
    useState(initialFormState);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const editTransaction = (transaction) => {
    setEditing(true);
    setShowEditModal(true);

    setCurrentTransaction({
      id: transaction.id,
      // date: transaction.date,
      date: format(new Date(transaction.date), 'y-MM-dd'),
      description: transaction.description,
      debit: transaction.debit,
      credit: transaction.credit,
      amount: transaction.amount,
    });
  };

  const updateTransaction = (id, updatedTransaction) => {
    setEditing(false);
    setShowEditModal(false);

    setTransactions(
      transactions.map((transaction) =>
        transaction.id === id ? updatedTransaction : transaction,
      ),
    );
  };

  return (
    <div className="flex flex-col grow">
      <div className="mb-5 flex flex-row justify-end space-x-5">
        <Button text="Add transaction" onClick={toggleModal} />
      </div>
      <Modal
        title="Add Transaction"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <NewTransactionForm
          initialFormState={initialFormState}
          transactions={transactions}
          setTransactions={setTransactions}
          setShowModal={setShowModal}
        />
      </Modal>

      <Modal
        title="Edit transaction"
        showModal={showEditModal}
        setShowModal={setShowEditModal}
      >
        <EditTransactionForm
          currentTransaction={currentTransaction}
          updateTransaction={updateTransaction}
        />
      </Modal>
      <Table
        transactionData={transactions}
        setTransactions={setTransactions}
        setShowModal={setShowModal}
        editTransaction={editTransaction}
      />
    </div>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf().isRequired,
  setTransactions: PropTypes.func.isRequired,
};
