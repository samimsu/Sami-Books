import React from 'react';
import DashboardIcon from '@/assets/DashboardIcon';
import TransactionsIcon from '@/assets/TransactionsIcon';
import ChartOfAccountsIcon from '@/assets/ChartOfAccountsIcon';
import SidebarItem from '../SidebarItem/SidebarItem';
// import { SidebarItem } from '@components/Sidebar';

export default function Sidebar() {
  // TODO: fix sidebar for chart of accounts
  return (
    // <div className="bg-slate-200 min-w-fit w-60 h-screen pl-5 pr-10 pt-10">
    <div className="bg-slate-200 min-w-fit w-60 min-h-max pl-5 pr-10 pt-10">
      <ul className="text-gray-600 space-y-3">
        <SidebarItem linkTo="/" icon={<DashboardIcon />} text="Dashboard" />
        <SidebarItem
          linkTo="/transactions"
          icon={<TransactionsIcon />}
          text="Transactions"
        />
        <SidebarItem
          linkTo="/chart-of-accounts"
          icon={<ChartOfAccountsIcon />}
          text="Chart of Accounts"
        />
      </ul>
    </div>
  );
}
