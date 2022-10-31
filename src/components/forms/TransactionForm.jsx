import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { formatISO } from 'date-fns';

import Input from '@components/Input/Input';
import Select from '@components/selects/Select';
import company from '@/mock/company';

export default function TransactionForm({
  initialFormState,
  transactions,
  setTransactions,
  setShowModal,
}) {
  // const todaysDate = format(new Date(), 'yyyy-MM-dd');

  const { register, handleSubmit } = useForm({
    defaultValues: initialFormState,
  });

  const onSubmit = (data) => {
    const transaction = {
      ...data,
      id: Date.now(),
      date: formatISO(new Date(data.date)),
      // date: formatDate(data.date),
      amount: Number(data.amount),
    };
    setShowModal(false);
    setTransactions(transactions.concat(transaction));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex flex-col space-y-1">
        <Input label="date" type="date" register={register} />
        <Input label="description" register={register} />
        <Select
          id="debit"
          label="debit"
          categoryOptions={company.accounts}
          register={register}
        />
        <Select
          id="credit"
          label="credit"
          categoryOptions={company.accounts}
          register={register}
        />
        <Input label="amount" register={register} />
      </div>
      <button
        type="submit"
        className="bg-blue-700 text-white py-2 px-5 rounded-md mt-5"
      >
        Save
      </button>
    </form>
  );
}

TransactionForm.propTypes = {
  initialFormState: PropTypes.shape({}).isRequired,
  transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setTransactions: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
