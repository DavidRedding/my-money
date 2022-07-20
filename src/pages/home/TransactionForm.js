import { useState } from 'react';

const TransactionForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, amount });
  };

  return (
    <>
      <h3 className="text-lg font-bold text-green-700">Add a Transaction</h3>

      <form className="p-3 mt-4 bg-green-700 rounded" onSubmit={handleSubmit}>
        <label className="block mb-4 ">
          <h3 className="mb-1 text-sm text-green-100 ">Transaction Name:</h3>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            className="w-full p-1 border border-white rounded outline-green-600"
          />
        </label>

        <label className="block mb-4 ">
          <h3 className="mb-1 text-sm text-green-100 ">Amount ($):</h3>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            type="number"
            className="w-full p-1 border border-white rounded outline-green-600"
          />
        </label>

        <button className="w-full py-1 border-2 rounded text-green-50 hover:bg-green-500">Add Transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
