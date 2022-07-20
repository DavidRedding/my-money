import TransactionForm from './TransactionForm';

const Home = () => (
  <div className="grid max-w-6xl grid-cols-3 gap-16 px-10 mx-auto my-4">
    <div className="col-span-2 bg-red-100 ">Transaction List</div>
    <div className="col-span-1">
      <TransactionForm />
    </div>
  </div>
);

export default Home;
