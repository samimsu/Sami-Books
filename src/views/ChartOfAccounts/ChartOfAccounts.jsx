import React, { useState } from 'react';
import capitalize from '@utils/capitalize';
import { ChartOfAccountsCategoryTable } from '@components';
// import chartOfAccounts from '../../mock/chartOfAccounts';
import mockCompanyData from '@/mock/company';

function ChartOfAccountsCategory({ title, type }) {
  return (
    <div>
      <ChartOfAccountsCategoryTable
        title={title}
        accounts={mockCompanyData.accounts.find(
          (account) => account.name === type,
        )}
      />
    </div>
  );
}

function Asset() {
  return <ChartOfAccountsCategory title="Asset Accounts" type="asset" />;
}

function Liability() {
  return (
    <ChartOfAccountsCategory title="Liability Accounts" type="liability" />
  );
}

function Equity() {
  return <ChartOfAccountsCategory title="Equity Accounts" type="equity" />;
}

function Revenue() {
  return <ChartOfAccountsCategory title="Revenue Accounts" type="revenue" />;
}

function Expense() {
  return <ChartOfAccountsCategory title="Expense Accounts" type="expense" />;
}

const CHART_OF_ACCOUNT_TABS = {
  asset: <Asset />,
  liability: <Liability />,
  equity: <Equity />,
  revenue: <Revenue />,
  expense: <Expense />,
};

function useChartOfAccounts() {
  const [activeTab, setActiveTab] = useState('asset');

  return { activeTab, setActiveTab };
}

export default function ChartOfAccounts() {
  const { activeTab, setActiveTab } = useChartOfAccounts();
  const chartOfAccountsCategories = [
    { id: 1, name: 'asset' },
    { id: 2, name: 'liability' },
    { id: 3, name: 'equity' },
    { id: 4, name: 'revenue' },
    { id: 5, name: 'expense' },
  ];
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-3xl font-medium mb-12">Chart of Accounts</h1>
      <ul className="flex text-lg mx-auto mb-12">
        {chartOfAccountsCategories.map((account) => (
          <button
            key={account.id}
            onClick={() => setActiveTab(account.name)}
            className={`border-b-4 px-10 ${
              activeTab === account.name
                ? 'border-blue-700 text-blue-700'
                : 'border-white'
            }`}
            type="button"
          >
            <li>{capitalize(account.name)}</li>
          </button>
        ))}
      </ul>
      {CHART_OF_ACCOUNT_TABS[activeTab]}
    </div>
  );
}
