import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '@components/Input/Input';
import Select from '@components/selects/Select';
import company from '@/mock/company';

export default function EditTransactionForm({
  currentTransaction,
  updateTransaction,
}) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: currentTransaction,
  });

  const onSubmit = (data) => {
    updateTransaction(data.id, data);
  };

  useEffect(() => {
    reset({ ...currentTransaction });
  }, [currentTransaction]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
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
      <button
        type="submit"
        className="bg-blue-700 text-white py-2 px-5 rounded-md mt-5"
      >
        Save
      </button>
    </form>
  );
}

EditTransactionForm.propTypes = {
  currentTransaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    debit: PropTypes.string.isRequired,
    credit: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  }).isRequired,
  updateTransaction: PropTypes.func.isRequired,
};
