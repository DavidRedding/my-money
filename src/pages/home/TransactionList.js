import useFirestore from '../../hooks/useFirestore';
import deleteIcon from '../../assets/deleteIcon.svg';

const TransactionList = ({ documents }) => {
  const { deleteDocument } = useFirestore('transactions');

  return (
    <ul>
      {documents.map((doc) => (
        <li
          key={doc.id}
          className="relative flex items-center justify-between p-5 mx-auto border border-l-4 shadow-md my-7 border-l-green-600"
        >
          <p className="text-xl text-gray-500">{doc.name}</p>
          <p className="text-2xl font-bold text-gray-600 ">${doc.amount}</p>

          <img
            className="absolute top-0 right-0 w-4 bg-gray-200 border cursor-pointer "
            alt="delete icon"
            src={deleteIcon}
            onClick={() => deleteDocument(doc.id)}
          ></img>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
