import { useState } from 'react';
// prettier-ignore

const Signup = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(displayName, email, password );
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-auto max-w-[360px] p-4 my-14">
      <h2 className="text-xl font-bold">sign up</h2>

      <label className="block my-5">
        <span className="block mb-1 ">display name :</span>
        <input
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          className="w-full px-2 py-1 border border-gray-500 "
          type="text"
        />
      </label>

      <label className="block my-5">
        <span className="block my-1 ">email :</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full px-2 py-1 border border-gray-500 "
          type="email"
        />
      </label>

      <label className="block my-5">
        <span className="block my-1 ">password :</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="w-full px-2 py-1 border border-gray-500 "
          type="password"
        />
      </label>

        <button className="block px-3 py-1 text-green-600 border border-green-600 rounded hover:bg-green-600 hover:text-green-50">
          Sign Up
        </button>
    </form>
  );
};

export default Signup;
