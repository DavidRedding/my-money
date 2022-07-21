import TransactionForm from './TransactionForm';
import { useAuthContext } from '../../hooks/useAuthContext';
import useCollection from '../../hooks/useCollection';
import TransactionList from './TransactionList';

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions');

  return (
    <div className="grid max-w-6xl grid-cols-3 gap-16 p-10 mx-auto">
      <div className="col-span-2">
        {error && <h1>{error}</h1>}
        {documents && <TransactionList documents={documents} />}
      </div>

      <div className="col-span-1">
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
