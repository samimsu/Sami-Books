import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Sidebar } from '@components/Sidebar';
import { Dashboard, Transactions, ChartOfAccounts } from '@views';
import mockCompanyData from '@/mock/company';

function App() {
  const [transactions, setTransactions] = useState(
    mockCompanyData.transactions,
  );
  return (
    <Router>
      <div className="flex flex-row">
        <Sidebar />

        <div className="flex grow p-5 h-screen">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  company={mockCompanyData}
                  transactions={transactions}
                />
              }
            />
            <Route
              path="/transactions"
              element={
                <Transactions
                  transactions={transactions}
                  setTransactions={setTransactions}
                />
              }
            />
            <Route path="/chart-of-accounts" element={<ChartOfAccounts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
