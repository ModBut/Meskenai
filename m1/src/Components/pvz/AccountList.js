import React from 'react';
import AccountItem from './AccountItem';

const AccountList = ({ accounts, onDelete, onDeposit, onWithdraw }) => {
  return (
    <div>
      <h2>Sąskaitų sąrašas</h2>
      {accounts.map((account) => (
        <AccountItem
          key={account.id}
          {...account}
          onDelete={onDelete}
          onDeposit={onDeposit}
          onWithdraw={onWithdraw}
        />
      ))}
    </div>
  );
};

export default AccountList;