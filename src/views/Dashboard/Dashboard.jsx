import React from 'react';
import PropTypes from 'prop-types';

// import GeneralWidget from '@components/widgets/GeneralWidget';
import GeneralWidget from '@components/widgets/GeneralWIdget';

export default function Dashboard({ company, transactions }) {
  const { currency, accounts } = company;
  const assetAccounts = accounts
    .find((account) => account.name === 'asset')
    .options.map((account) => account.name);
  const liabilityAccounts = accounts
    .find((account) => account.name === 'liability')
    .options.map((account) => account.name);
  const revenueAccounts = accounts
    .find((account) => account.name === 'revenue')
    .options.map((account) => account.name);
  const expenseAccounts = accounts
    .find((account) => account.name === 'expense')
    .options.map((account) => account.name);
  let initialAssetAmount = 0;
  let initialLiabilityAmount = 0;
  let initialRevenueAmount = 0;
  let initialExpenseAmount = 0;
  transactions.forEach((transaction) => {
    if (assetAccounts.includes(transaction.debit)) {
      initialAssetAmount += transaction.amount;
    } else if (liabilityAccounts.includes(transaction.debit)) {
      initialLiabilityAmount -= transaction.amount;
    } else if (revenueAccounts.includes(transaction.debit)) {
      initialRevenueAmount -= transaction.amount;
    } else if (expenseAccounts.includes(transaction.debit)) {
      initialExpenseAmount += transaction.amount;
    }

    if (assetAccounts.includes(transaction.credit)) {
      initialAssetAmount -= transaction.amount;
    } else if (liabilityAccounts.includes(transaction.credit)) {
      initialLiabilityAmount += transaction.amount;
    } else if (revenueAccounts.includes(transaction.credit)) {
      initialRevenueAmount += transaction.amount;
    } else if (expenseAccounts.includes(transaction.credit)) {
      initialExpenseAmount -= transaction.amount;
    }
  });
  // const initialAssetAmount = transactions.filter(transaction => transaction);
  // const [assetAmount, setAssetAmount] = useState();
  return (
    <div className="flex flex-col grow space-y-5">
      <div className="flex h-fit space-x-5 mx-auto">
        <GeneralWidget
          title="Assets"
          content={`${currency} ${initialAssetAmount}`}
        />
        <GeneralWidget
          title="Liabilities"
          content={`${currency} ${initialLiabilityAmount}`}
        />
        <GeneralWidget
          title="Equity"
          content={`${currency} ${initialAssetAmount - initialLiabilityAmount}`}
        />
      </div>
      <div className="flex h-fit space-x-5 mx-auto">
        <GeneralWidget
          title="Revenue"
          content={`${currency} ${initialRevenueAmount}`}
        />
        <GeneralWidget
          title="Expenses"
          content={`${currency} ${initialExpenseAmount}`}
        />
        <GeneralWidget
          title="Profit/Loss"
          content={`${currency} ${initialRevenueAmount - initialExpenseAmount}`}
        />
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    transactions: PropTypes.arrayOf().isRequired,
    accounts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        options: PropTypes.arrayOf().isRequired,
      }),
    ).isRequired,
  }).isRequired,
  transactions: PropTypes.arrayOf().isRequired,
};
