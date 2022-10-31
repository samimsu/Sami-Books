const company = {
  id: 1,
  name: 'Sami Corp',
  currency: 'AED',

  transactions: [],
  accounts: [
    {
      id: 1,
      name: 'asset',
      options: [
        { id: 1, name: 'Cash on Hand', type: 'asset' },
        { id: 2, name: 'Bank', type: 'asset' },
        { id: 3, name: 'Accounts Receivable', type: 'asset' },
      ],
    },
    {
      id: 2,
      name: 'liability',
      options: [
        { id: 1, name: 'Accounts Payable', type: 'liability' },
        { id: 2, name: 'Loans Payable', type: 'liability' },
      ],
    },
    {
      id: 3,
      name: 'equity',
      options: [
        { id: 1, name: 'Capital', type: 'equity' },
        { id: 2, name: 'Drawing', type: 'equity' },
      ],
    },
    {
      id: 4,
      name: 'revenue',
      options: [
        { id: 1, name: 'Sales', type: 'revenue' },
        { id: 2, name: 'Sales Discounts', type: 'revenue' },
        { id: 3, name: 'Sales Returns', type: 'revenue' },
      ],
    },
    {
      id: 5,
      name: 'expense',
      options: [
        { id: 1, name: 'Freight Charges', type: 'expense' },
        { id: 2, name: 'Miscellaneous Expenses', type: 'expense' },
        { id: 3, name: 'Office Expense', type: 'expense' },
        { id: 4, name: 'Purchases', type: 'expense' },
        { id: 5, name: 'Rent', type: 'expense' },
        { id: 6, name: 'Salaries', type: 'expense' },
        { id: 7, name: 'Utilities', type: 'expense' },
      ],
    },
  ],
};

export default company;
