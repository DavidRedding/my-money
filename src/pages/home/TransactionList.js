const TransactionList = ({ documents }) => {
  console.log(documents);
  return (
    <ul>
      {documents.map((doc) => (
        <li
          key={doc.id}
          className="relative flex items-center justify-between p-5 mx-auto overflow-hidden border border-l-4 shadow-md my-7 border-l-green-600"
        >
          <p className="text-xl text-gray-500">{doc.name}</p>
          <p className="text-2xl font-bold text-gray-600 ">${doc.amount}</p>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
