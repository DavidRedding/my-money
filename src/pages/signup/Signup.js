import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
// prettier-ignore

const Signup = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isPending} = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(displayName, email, password );
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-auto max-w-[360px] p-4 my-14">
      <h2 className="text-xl font-bold">sign up</h2>

      <label className="block my-5">
        <span className="block mb-1 ">display name :</span>
        <input
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          className="w-full px-2 py-1 border border-gray-500 outline-teal-900"
          type="text"
        />
      </label>

      <label className="block my-5">
        <span className="block my-1 ">email :</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full px-2 py-1 border border-gray-500 outline-teal-900"
          type="email"
        />
      </label>

      <label className="block my-5">
        <span className="block my-1 ">password :</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="w-full px-2 py-1 border border-gray-500 outline-teal-900"
          type="password"
        />
      </label>

      { !isPending && <button className="block px-3 py-1 text-green-600 border border-green-600 rounded hover:bg-green-600 hover:text-green-50">sign up</button> }
      { isPending && <button disabled className="block px-3 py-1 text-gray-500 border border-gray-400 rounded ">loading...</button> }
      { error && <p className='mt-1'>{error}</p> }
    </form>
  );
};

export default Signup;
