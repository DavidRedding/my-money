import { useEffect } from 'react';
import { useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      // sign the user out of firebase
      await projectAuth.signOut();

      // sign the user out of local state
      dispatch({ type: 'LOGOUT' });

      // update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  // cleanup runs only on un-mount
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, error, isPending };
};

export default useLogout;
