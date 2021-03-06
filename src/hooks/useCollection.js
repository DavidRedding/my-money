import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => results.push({ ...doc.data(), id: doc.id }));
        setDocuments(results);
        setError(null);
      },
      (err) => {
        console.log(err);
        setError(`Could not fetch the data`);
      }
    );

    return () => unsubscribe();
  }, [collection]);

  return { documents, error };
};

export default useCollection;
