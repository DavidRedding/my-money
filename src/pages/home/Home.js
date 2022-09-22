import TransactionForm from './TransactionForm';
import { useAuthContext } from '../../hooks/useAuthContext';
import useCollection from '../../hooks/useCollection';
import TransactionList from './TransactionList';

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions', ['uid', '==', user.uid], ['createdAt', 'desc']);

  return (
    <div className="grid max-w-6xl grid-cols-3 gap-16 p-10 mx-auto sm:bg-white">
      <div className="order-1 col-span-3 sm:-order-1 sm:col-span-2">
        <h3 className="text-lg font-bold text-green-600 sm:hidden">Recent Transactions</h3>
        {error && <h1>{error}</h1>}
        {documents && <TransactionList documents={documents} />}
      </div>

      <div className="col-span-3 sm:col-span-1">
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
